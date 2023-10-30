package com.example.demo.dto;

import com.example.demo.validationgroups.BeatValidation;
import com.example.demo.validator.File;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BeatDTO {

    @NotNull(message = "Beat Name must be not null", groups = {BeatValidation.UploadBeat.class, BeatValidation.UpdateBeat.class})
    @NotBlank(message = "Beat Name must be not blank", groups = {BeatValidation.UploadBeat.class, BeatValidation.UpdateBeat.class})
    private String beatName;

    @File(groups = BeatValidation.UploadBeat.class)
    private byte[] beatDemoSound;

    @File(groups = BeatValidation.UploadBeat.class)
    private byte[] beatFullSound;

    private String username;

    private String description;

    private Double price;
    private String fullName;
    private Long userId;
    private Long beatId;
    private List<String> genres;
    private int rating;
    private String vocalRange;

    @Override
    public String toString() {
        return "BeatDTO{" +
                "beatName='" + beatName + '\'' +
                ", beatSound='" + beatDemoSound + '\'' +
                ", username='" + username + '\'' +
                ", price=" + price +
                ", fullName='" + fullName + '\'' +
                '}';
    }
}