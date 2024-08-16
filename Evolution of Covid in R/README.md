# Evolution of COVID-19 and Related Diseases: An Analysis in R

## Project Overview

This project, titled **"Evidencia 2,"** was developed by **Santiago Mora** and **José Manuel Martínez**. It focuses on the analysis of the evolution of COVID-19 and related coronaviruses. The objective was to explore the phenomenon of zoonosis by comparing the genetic sequences of SARS-CoV-2 variants from different countries with those of similar coronaviruses found in other species. The data used in this project were retrieved from the NCBI database, specifically focusing on Betacoronaviruses, which are closely related to SARS-CoV-2.

## Methodology

### Data Collection
- **Sequences Analyzed:** The analysis includes sequences from various SARS-CoV-2 variants (Alpha, Beta, Gamma, Delta, Omicron) and coronaviruses from other species, including bats, camels, and rodents.
- **Source:** The sequences were obtained from the NCBI database, with a focus on Betacoronaviruses due to their similarity to SARS-CoV-2.

### Tools and Libraries
The analysis was conducted in R using the following libraries:
- `ggplot2` for data visualization
- `seqinr` for sequence analysis
- `ggthemes` for enhanced graphical themes
- `tidyr` for data manipulation
- `ape` for phylogenetic analysis

### Sequence Analysis

1. **Length Calculation:**
   The length of each viral sequence was calculated to understand the genetic makeup of different coronavirus variants.

2. **Nucleotide Count:**
   The nucleotide composition (A, G, C, T) of each sequence was determined to identify similarities and differences between SARS-CoV-2 variants and other Betacoronaviruses.

3. **Comparative Analysis:**
   The nucleotide counts across all analyzed sequences were compared to provide insights into their genetic similarities and differences.

4. **Hierarchical Clustering:**
   A hierarchical analysis was conducted to group the sequences based on their genetic relatedness, revealing the evolutionary relationships among different coronavirus species.

## Key Findings

- **Zoonosis Analysis:** The study revealed that the SARS-CoV-2 variants are closely related to Betacoronaviruses found in horseshoe bats, suggesting a potential zoonotic origin. The analysis also confirmed the relationship between the MERS virus and dromedary camels, as well as the connection between the Mouse Hepatitis Virus (MHV) and betacoronaviruses in Chinese rats.

- **Phylogenetic Insights:** The hierarchical clustering provided a clear phylogenetic understanding, illustrating the evolutionary pathways of the analyzed coronaviruses. It demonstrated that while all analyzed sequences belong to coronaviruses, distinct evolutionary branches correspond to different species.

## Conclusion

This project effectively utilized R to analyze and interpret the genetic evolution of COVID-19 and related coronaviruses. The findings contribute to our understanding of the zoonotic origins of SARS-CoV-2 and its evolutionary relationships with other Betacoronaviruses.

## References

All references are from PUBMED:

1. Alkhovsky S, Lenshin S, Romashin A, Vishnevskaya T, Vyshemirsky O, Bulycheva Y, Lvov D, Gitelman A. SARS-like Coronaviruses in Horseshoe Bats (Rhinolophus spp.) in Russia, 2020. Viruses. 2022 Jan 9;14(1):113. doi: 10.3390/v14010113. PMID: 35062318; PMCID: PMC8779456.

2. Petrosillo N, Viceconte G, Ergonul O, Ippolito G, Petersen E. COVID-19, SARS and MERS: are they closely related? Clin Microbiol Infect. 2020 Jun;26(6):729-734. doi: 10.1016/j.cmi.2020.03.026. Epub 2020 Mar 28. PMID: 32234451; PMCID: PMC7176926.

3. Taguchi F. [Mouse hepatitis virus (MHV) receptor and its interaction with MHV spike protein]. Uirusu. 2001 Dec;51(2):177-83. Japanese. PMID: 11977759.
