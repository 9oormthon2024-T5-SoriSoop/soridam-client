export type StyledKey = "category" | "noiseLevel" | "radius";

export type StyleValue = {
    [key in StyledKey]: key extends "noiseLevel" ? string : string | null;
};