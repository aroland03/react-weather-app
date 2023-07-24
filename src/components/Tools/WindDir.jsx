export const WindDir = ({dirDegree}) => { 
    if(dirDegree > 348.75 || dirDegree <= 11.25) return " (É)";
    if(dirDegree > 11.25 && dirDegree <= 33.75) return " (É-ÉK)";
    if(dirDegree > 33.75 && dirDegree <= 56.25) return " (ÉK)";
    if(dirDegree > 56.25 && dirDegree <= 78.75) return " (K-ÉK)";
    if(dirDegree > 78.75 && dirDegree <= 101.25) return " (K)";
    if(dirDegree > 101.25 && dirDegree <= 123.75) return " (K-DK)";
    if(dirDegree > 123.75 && dirDegree <= 146.25) return " (DK)";
    if(dirDegree > 146.25 && dirDegree <= 168.75) return " (D-DK)";
    if(dirDegree > 168.75 && dirDegree <= 191.25) return " (D)";
    if(dirDegree > 191.25 && dirDegree <= 213.75) return " (D-DNY)";
    if(dirDegree > 213.75 && dirDegree <= 236.25) return " (DNY)";
    if(dirDegree > 236.25 && dirDegree <= 258.75) return " (NY-DNY)";
    if(dirDegree > 258.75 && dirDegree <= 281.25) return " (NY)";
    if(dirDegree > 281.25 && dirDegree <= 303.75) return " (NY-ÉNY)";
    if(dirDegree > 303.75 && dirDegree <= 326.25) return " (ÉNY)";
    if(dirDegree > 326.25 && dirDegree <= 348.75) return " (É-ÉNY)";
}