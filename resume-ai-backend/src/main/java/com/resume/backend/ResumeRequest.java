package com.resume.backend;

import com.fasterxml.jackson.annotation.JsonProperty;

public record ResumeRequest(
        @JsonProperty("userDescription") String userDescription
) {
}
