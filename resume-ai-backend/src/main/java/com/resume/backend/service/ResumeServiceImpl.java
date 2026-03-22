package com.resume.backend.service;

import java.util.HashMap;
import java.util.Map;
import org.json.JSONObject;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

@Service
public class ResumeServiceImpl implements ResumeService {

    private ChatClient chatClient ;

    public ResumeServiceImpl(ChatClient.Builder builder){
       this.chatClient = builder.build() ;
    }

    @Override
    public Map<String , Object> generateResumeResponse(String userResumeDescription) throws IOException {

      String promptString =   this.loadPromptFromFile("resume_prompt.text");
      String promptContent = this.putValuesToTemplate(promptString , Map.of(
              "userDescription",userResumeDescription
      ));

       Prompt prompt = new Prompt(promptContent);
       String response =  chatClient.prompt(promptContent).call().content();
       Map<String , Object> stringObjectMap = parseMultipleResponses(response);
        // result.
        return stringObjectMap;
    }

    // to load the file .
     String loadPromptFromFile(String filename) throws IOException {
        try (java.io.InputStream inputStream = new ClassPathResource(filename).getInputStream()) {
            return new String(inputStream.readAllBytes(), java.nio.charset.StandardCharsets.UTF_8);
        }
    }

    String putValuesToTemplate(String template , Map<String , String> values){
        for (Map.Entry<String,String> entry : values.entrySet()){
           template =  template.replace("{" + entry.getKey() + "}" , entry.getValue());
        }
        return template ;
    }



    public static Map<String, Object> parseMultipleResponses(String response){

        Map<String, Object> jsonResponse = new HashMap<>();

        // Extract content inside <think> tags
        int thinkStart = response.indexOf("<think>");
        int thinkEnd = response.indexOf("</think>");

        if(thinkStart != -1 && thinkEnd != -1 && thinkStart < thinkEnd){
            String thinkContent = response.substring(thinkStart + 7, thinkEnd).trim();
            jsonResponse.put("think", thinkContent);
        } else {
            jsonResponse.put("think", null);
        }

        // Extract content that is in JSON format
        int jsonStart = response.indexOf("```json");
        int jsonEnd = response.lastIndexOf("```");

        if(jsonStart != -1 && jsonEnd != -1 && jsonStart < jsonEnd){
            String jsonContent = response.substring(jsonStart + 7, jsonEnd).trim();

            try{
                JSONObject dataContent = new JSONObject(jsonContent);
                jsonResponse.put("data", dataContent.toMap());
            }catch(Exception e){
                jsonResponse.put("data", null);
                System.out.println("Invalid Json format in the response: " + e.getMessage());
            }

        } else {
            jsonResponse.put("data", null);
        }

        return jsonResponse;
    }


}

