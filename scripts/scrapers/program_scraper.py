"""
University program data collector.
Combines Wikidata university data with curated program information
for top European universities.
"""

import json

# Curated program data for major European universities.
# This covers programs across multiple fields and degree levels.
# Each entry maps to a university by name (matched during pipeline).

CURATED_PROGRAMS = [
    # ===================== GERMANY =====================
    # TU Munich
    {"university": "Technical University of Munich", "name": "M.Sc. Informatics", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 0, "minGpaRequired": 3.5, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-05-31", "applicationUrl": "https://www.tum.de/en/studies/application"},
    {"university": "Technical University of Munich", "name": "M.Sc. Data Engineering and Analytics", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 0, "minGpaRequired": 3.3, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-05-31", "applicationUrl": "https://www.tum.de/en/studies/application"},
    {"university": "Technical University of Munich", "name": "M.Sc. Robotics, Cognition, Intelligence", "fieldOfStudy": "Engineering", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 0, "minGpaRequired": 3.3, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-05-31", "applicationUrl": "https://www.tum.de/en/studies/application"},
    {"university": "Technical University of Munich", "name": "B.Sc. Mechanical Engineering", "fieldOfStudy": "Engineering", "degreeLevel": "bachelors", "languageOfInstruction": "German", "durationMonths": 36, "tuitionPerYearEur": 0, "minGpaRequired": 3.0, "requiredLanguage": "German", "requiredLanguageLevel": "C1", "applicationDeadline": "2026-07-15", "applicationUrl": "https://www.tum.de/en/studies/application"},
    {"university": "Technical University of Munich", "name": "M.Sc. Management and Technology", "fieldOfStudy": "Business Administration", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 0, "minGpaRequired": 3.2, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-05-31", "applicationUrl": "https://www.tum.de/en/studies/application"},

    # RWTH Aachen
    {"university": "RWTH Aachen University", "name": "M.Sc. Computer Science", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 0, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-03-01", "applicationUrl": "https://www.rwth-aachen.de/go/id/bkxf/"},
    {"university": "RWTH Aachen University", "name": "M.Sc. Electrical Engineering", "fieldOfStudy": "Engineering", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 0, "minGpaRequired": 2.8, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-03-01", "applicationUrl": "https://www.rwth-aachen.de/go/id/bkxf/"},
    {"university": "RWTH Aachen University", "name": "M.Sc. Mechanical Engineering", "fieldOfStudy": "Engineering", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 0, "minGpaRequired": 2.8, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-03-01", "applicationUrl": "https://www.rwth-aachen.de/go/id/bkxf/"},
    {"university": "RWTH Aachen University", "name": "M.Sc. Data Science", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 0, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-03-01", "applicationUrl": "https://www.rwth-aachen.de/go/id/bkxf/"},

    # TU Berlin
    {"university": "Technische Universität Berlin", "name": "M.Sc. Computer Science", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 0, "minGpaRequired": 3.3, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2025-12-15", "applicationUrl": "https://www.tu.berlin/en/studying/applying-and-enrolling"},
    {"university": "Technische Universität Berlin", "name": "M.Sc. Industrial Engineering", "fieldOfStudy": "Engineering", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 0, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2025-12-15", "applicationUrl": "https://www.tu.berlin/en/studying/applying-and-enrolling"},

    # LMU Munich
    {"university": "Ludwig-Maximilians-Universität München", "name": "M.Sc. Computer Science", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 0, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-05-15", "applicationUrl": "https://www.lmu.de/en/study/"},
    {"university": "Ludwig-Maximilians-Universität München", "name": "M.Sc. Data Science", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 0, "minGpaRequired": 3.2, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-05-15", "applicationUrl": "https://www.lmu.de/en/study/"},
    {"university": "Ludwig-Maximilians-Universität München", "name": "M.Sc. Economics", "fieldOfStudy": "Economics", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 0, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-05-15", "applicationUrl": "https://www.lmu.de/en/study/"},

    # Heidelberg
    {"university": "Heidelberg University", "name": "M.Sc. Physics", "fieldOfStudy": "Physics", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 1500, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-03-15", "applicationUrl": "https://www.uni-heidelberg.de/en/study"},
    {"university": "Heidelberg University", "name": "M.Sc. Molecular Biosciences", "fieldOfStudy": "Biology", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 1500, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-03-15", "applicationUrl": "https://www.uni-heidelberg.de/en/study"},

    # ===================== NETHERLANDS =====================
    # TU Delft
    {"university": "Delft University of Technology", "name": "M.Sc. Computer Science", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 2314, "minGpaRequired": 3.3, "requiredLanguage": "English", "requiredLanguageLevel": "C1", "applicationDeadline": "2025-12-01", "applicationUrl": "https://www.tudelft.nl/en/education/admission-and-application/"},
    {"university": "Delft University of Technology", "name": "M.Sc. Aerospace Engineering", "fieldOfStudy": "Engineering", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 2314, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "C1", "applicationDeadline": "2025-12-01", "applicationUrl": "https://www.tudelft.nl/en/education/admission-and-application/"},
    {"university": "Delft University of Technology", "name": "M.Sc. Electrical Engineering", "fieldOfStudy": "Engineering", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 2314, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "C1", "applicationDeadline": "2025-12-01", "applicationUrl": "https://www.tudelft.nl/en/education/admission-and-application/"},

    # University of Amsterdam
    {"university": "University of Amsterdam", "name": "M.Sc. Artificial Intelligence", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 2314, "minGpaRequired": 3.4, "requiredLanguage": "English", "requiredLanguageLevel": "C1", "applicationDeadline": "2025-12-15", "applicationUrl": "https://www.uva.nl/en/programmes/"},
    {"university": "University of Amsterdam", "name": "M.Sc. Business Administration", "fieldOfStudy": "Business Administration", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 12, "tuitionPerYearEur": 2314, "minGpaRequired": 3.2, "requiredLanguage": "English", "requiredLanguageLevel": "C1", "applicationDeadline": "2025-11-01", "applicationUrl": "https://www.uva.nl/en/programmes/"},
    {"university": "University of Amsterdam", "name": "M.Sc. Economics", "fieldOfStudy": "Economics", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 12, "tuitionPerYearEur": 2314, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "C1", "applicationDeadline": "2025-11-01", "applicationUrl": "https://www.uva.nl/en/programmes/"},

    # Eindhoven
    {"university": "Eindhoven University of Technology", "name": "M.Sc. Computer Science and Engineering", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 2314, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-04-01", "applicationUrl": "https://www.tue.nl/en/education/"},
    {"university": "Eindhoven University of Technology", "name": "M.Sc. Data Science and Artificial Intelligence", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 2314, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-04-01", "applicationUrl": "https://www.tue.nl/en/education/"},

    # ===================== SWITZERLAND =====================
    # ETH Zurich
    {"university": "ETH Zurich", "name": "M.Sc. Computer Science", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 1460, "minGpaRequired": 3.7, "requiredLanguage": "English", "requiredLanguageLevel": "C1", "applicationDeadline": "2025-12-15", "applicationUrl": "https://ethz.ch/en/studies/master/application.html"},
    {"university": "ETH Zurich", "name": "M.Sc. Data Science", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 1460, "minGpaRequired": 3.5, "requiredLanguage": "English", "requiredLanguageLevel": "C1", "applicationDeadline": "2025-12-15", "applicationUrl": "https://ethz.ch/en/studies/master/application.html"},
    {"university": "ETH Zurich", "name": "M.Sc. Electrical Engineering", "fieldOfStudy": "Engineering", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 1460, "minGpaRequired": 3.5, "requiredLanguage": "English", "requiredLanguageLevel": "C1", "applicationDeadline": "2025-12-15", "applicationUrl": "https://ethz.ch/en/studies/master/application.html"},

    # EPFL
    {"university": "École Polytechnique Fédérale de Lausanne", "name": "M.Sc. Computer Science", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 1266, "minGpaRequired": 3.5, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2025-12-15", "applicationUrl": "https://www.epfl.ch/education/master/"},
    {"university": "École Polytechnique Fédérale de Lausanne", "name": "M.Sc. Data Science", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 1266, "minGpaRequired": 3.5, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2025-12-15", "applicationUrl": "https://www.epfl.ch/education/master/"},

    # ===================== SWEDEN =====================
    # KTH
    {"university": "KTH Royal Institute of Technology", "name": "M.Sc. Computer Science", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 0, "minGpaRequired": 3.2, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-01-15", "applicationUrl": "https://www.kth.se/en/studies/master"},
    {"university": "KTH Royal Institute of Technology", "name": "M.Sc. Machine Learning", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 0, "minGpaRequired": 3.3, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-01-15", "applicationUrl": "https://www.kth.se/en/studies/master"},
    {"university": "KTH Royal Institute of Technology", "name": "M.Sc. Electrical Engineering", "fieldOfStudy": "Engineering", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 0, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-01-15", "applicationUrl": "https://www.kth.se/en/studies/master"},

    # ===================== AUSTRIA =====================
    # University of Vienna
    {"university": "University of Vienna", "name": "M.Sc. Computer Science", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 726, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-02-28", "applicationUrl": "https://www.univie.ac.at/en/studies/admission/"},
    {"university": "University of Vienna", "name": "M.Sc. Business Informatics", "fieldOfStudy": "Business Administration", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 726, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-02-28", "applicationUrl": "https://www.univie.ac.at/en/studies/admission/"},
    {"university": "University of Vienna", "name": "M.A. Economics", "fieldOfStudy": "Economics", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 726, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-02-28", "applicationUrl": "https://www.univie.ac.at/en/studies/admission/"},

    # TU Wien
    {"university": "TU Wien", "name": "M.Sc. Computer Science", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 726, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-02-28", "applicationUrl": "https://www.tuwien.at/en/studies/"},
    {"university": "TU Wien", "name": "M.Sc. Data Science", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 726, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-02-28", "applicationUrl": "https://www.tuwien.at/en/studies/"},

    # ===================== ITALY =====================
    # Politecnico di Milano
    {"university": "Politecnico di Milano", "name": "M.Sc. Computer Science and Engineering", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 3900, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-01-20", "applicationUrl": "https://www.polimi.it/en/programmes/"},
    {"university": "Politecnico di Milano", "name": "M.Sc. Mechanical Engineering", "fieldOfStudy": "Engineering", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 3900, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-01-20", "applicationUrl": "https://www.polimi.it/en/programmes/"},
    {"university": "Politecnico di Milano", "name": "M.Sc. Telecommunication Engineering", "fieldOfStudy": "Engineering", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 3900, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-01-20", "applicationUrl": "https://www.polimi.it/en/programmes/"},

    # University of Bologna
    {"university": "University of Bologna", "name": "M.Sc. Artificial Intelligence", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 2800, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-03-31", "applicationUrl": "https://www.unibo.it/en/study"},
    {"university": "University of Bologna", "name": "M.Sc. Civil Engineering", "fieldOfStudy": "Engineering", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 2800, "minGpaRequired": 2.8, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-03-31", "applicationUrl": "https://www.unibo.it/en/study"},

    # ===================== FRANCE =====================
    # Sorbonne
    {"university": "Sorbonne University", "name": "M.Sc. Computer Science", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 243, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-04-15", "applicationUrl": "https://www.sorbonne-universite.fr/en/education"},
    {"university": "Sorbonne University", "name": "M.Sc. Mathematics", "fieldOfStudy": "Mathematics", "degreeLevel": "masters", "languageOfInstruction": "French", "durationMonths": 24, "tuitionPerYearEur": 243, "minGpaRequired": 3.2, "requiredLanguage": "French", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-04-15", "applicationUrl": "https://www.sorbonne-universite.fr/en/education"},

    # École Polytechnique
    {"university": "École Polytechnique", "name": "M.Sc. Data Science for Business", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 15000, "minGpaRequired": 3.5, "requiredLanguage": "English", "requiredLanguageLevel": "C1", "applicationDeadline": "2026-01-15", "applicationUrl": "https://programmes.polytechnique.edu/en/"},
    {"university": "École Polytechnique", "name": "M.Sc. Internet of Things: Innovation and Management", "fieldOfStudy": "Engineering", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 15000, "minGpaRequired": 3.3, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-01-15", "applicationUrl": "https://programmes.polytechnique.edu/en/"},

    # ===================== FINLAND =====================
    {"university": "University of Helsinki", "name": "M.Sc. Computer Science", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 15000, "minGpaRequired": 3.2, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-01-10", "applicationUrl": "https://www.helsinki.fi/en/admissions-and-education"},
    {"university": "University of Helsinki", "name": "M.Sc. Data Science", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 15000, "minGpaRequired": 3.2, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-01-10", "applicationUrl": "https://www.helsinki.fi/en/admissions-and-education"},
    {"university": "Aalto University", "name": "M.Sc. Computer, Communication and Information Sciences", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 15000, "minGpaRequired": 3.2, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-01-10", "applicationUrl": "https://www.aalto.fi/en/study-options"},

    # ===================== DENMARK =====================
    {"university": "Technical University of Denmark", "name": "M.Sc. Computer Science and Engineering", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 0, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-01-15", "applicationUrl": "https://www.dtu.dk/english/education/"},
    {"university": "University of Copenhagen", "name": "M.Sc. Computer Science", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 0, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-01-15", "applicationUrl": "https://www.ku.dk/english/education/"},

    # ===================== SPAIN =====================
    {"university": "Universitat Politècnica de Catalunya", "name": "M.Sc. Informatics Engineering", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 2500, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-06-30", "applicationUrl": "https://www.upc.edu/en/masters"},
    {"university": "Universidad Carlos III de Madrid", "name": "M.Sc. Computer Science and Technology", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 18, "tuitionPerYearEur": 3000, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-05-30", "applicationUrl": "https://www.uc3m.es/master/"},

    # ===================== CZECH REPUBLIC =====================
    {"university": "Charles University", "name": "M.Sc. Computer Science", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 5000, "minGpaRequired": 2.8, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-04-30", "applicationUrl": "https://cuni.cz/UKEN-10.html"},
    {"university": "Czech Technical University in Prague", "name": "M.Sc. Computer Science", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 4500, "minGpaRequired": 2.8, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-03-31", "applicationUrl": "https://www.cvut.cz/en/"},

    # ===================== POLAND =====================
    {"university": "University of Warsaw", "name": "M.Sc. Computer Science", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 3200, "minGpaRequired": 2.7, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-06-15", "applicationUrl": "https://www.uw.edu.pl/en/"},
    {"university": "University of Warsaw", "name": "M.Sc. Data Science and Business Analytics", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 3200, "minGpaRequired": 2.7, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-06-15", "applicationUrl": "https://www.uw.edu.pl/en/"},
    {"university": "AGH University of Krakow", "name": "M.Sc. Computer Science", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 2500, "minGpaRequired": 2.7, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-07-15", "applicationUrl": "https://www.agh.edu.pl/en/"},

    # ===================== BELGIUM =====================
    {"university": "KU Leuven", "name": "M.Sc. Computer Science", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 922, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-03-01", "applicationUrl": "https://www.kuleuven.be/english/education"},
    {"university": "KU Leuven", "name": "M.Sc. Artificial Intelligence", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 922, "minGpaRequired": 3.2, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-03-01", "applicationUrl": "https://www.kuleuven.be/english/education"},

    # ===================== NORWAY =====================
    {"university": "Norwegian University of Science and Technology", "name": "M.Sc. Computer Science", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 0, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2025-12-01", "applicationUrl": "https://www.ntnu.edu/studies/"},
    {"university": "University of Oslo", "name": "M.Sc. Computer Science", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 0, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2025-12-01", "applicationUrl": "https://www.uio.no/english/studies/"},

    # ===================== IRELAND =====================
    {"university": "Trinity College Dublin", "name": "M.Sc. Computer Science", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 12, "tuitionPerYearEur": 11500, "minGpaRequired": 3.3, "requiredLanguage": "English", "requiredLanguageLevel": "C1", "applicationDeadline": "2026-06-30", "applicationUrl": "https://www.tcd.ie/courses/postgraduate/"},
    {"university": "University College Dublin", "name": "M.Sc. Computer Science", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 12, "tuitionPerYearEur": 8500, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "C1", "applicationDeadline": "2026-06-30", "applicationUrl": "https://www.ucd.ie/global/studyatucd/"},

    # ===================== PORTUGAL =====================
    {"university": "University of Lisbon", "name": "M.Sc. Computer Science and Engineering", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 1500, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-06-30", "applicationUrl": "https://www.ulisboa.pt/en/"},
    {"university": "University of Porto", "name": "M.Sc. Informatics and Computing Engineering", "fieldOfStudy": "Computer Science", "degreeLevel": "masters", "languageOfInstruction": "English", "durationMonths": 24, "tuitionPerYearEur": 1500, "minGpaRequired": 3.0, "requiredLanguage": "English", "requiredLanguageLevel": "B2", "applicationDeadline": "2026-06-30", "applicationUrl": "https://sigarra.up.pt/up/en/"},
]


# Ranking data from QS and THE (public data)
UNIVERSITY_RANKINGS = {
    "Technical University of Munich": {"rankingQs": 37, "rankingThe": 30, "estimatedMonthlyLivingCostEur": 950},
    "RWTH Aachen University": {"rankingQs": 106, "rankingThe": 90, "estimatedMonthlyLivingCostEur": 850},
    "Technische Universität Berlin": {"rankingQs": 154, "rankingThe": 140, "estimatedMonthlyLivingCostEur": 900},
    "Ludwig-Maximilians-Universität München": {"rankingQs": 54, "rankingThe": 32, "estimatedMonthlyLivingCostEur": 950},
    "Heidelberg University": {"rankingQs": 47, "rankingThe": 43, "estimatedMonthlyLivingCostEur": 800},
    "Delft University of Technology": {"rankingQs": 47, "rankingThe": 48, "estimatedMonthlyLivingCostEur": 1100},
    "University of Amsterdam": {"rankingQs": 53, "rankingThe": 60, "estimatedMonthlyLivingCostEur": 1200},
    "Eindhoven University of Technology": {"rankingQs": 124, "rankingThe": 119, "estimatedMonthlyLivingCostEur": 900},
    "ETH Zurich": {"rankingQs": 7, "rankingThe": 11, "estimatedMonthlyLivingCostEur": 1800},
    "École Polytechnique Fédérale de Lausanne": {"rankingQs": 12, "rankingThe": 14, "estimatedMonthlyLivingCostEur": 1700},
    "KTH Royal Institute of Technology": {"rankingQs": 73, "rankingThe": 72, "estimatedMonthlyLivingCostEur": 1050},
    "University of Vienna": {"rankingQs": 130, "rankingThe": 124, "estimatedMonthlyLivingCostEur": 900},
    "TU Wien": {"rankingQs": 191, "rankingThe": 201, "estimatedMonthlyLivingCostEur": 900},
    "Politecnico di Milano": {"rankingQs": 123, "rankingThe": 155, "estimatedMonthlyLivingCostEur": 1000},
    "University of Bologna": {"rankingQs": 164, "rankingThe": 161, "estimatedMonthlyLivingCostEur": 850},
    "Sorbonne University": {"rankingQs": 59, "rankingThe": 53, "estimatedMonthlyLivingCostEur": 1200},
    "École Polytechnique": {"rankingQs": 48, "rankingThe": 81, "estimatedMonthlyLivingCostEur": 1100},
    "University of Helsinki": {"rankingQs": 115, "rankingThe": 101, "estimatedMonthlyLivingCostEur": 1000},
    "Aalto University": {"rankingQs": 109, "rankingThe": 201, "estimatedMonthlyLivingCostEur": 1000},
    "Technical University of Denmark": {"rankingQs": 121, "rankingThe": 149, "estimatedMonthlyLivingCostEur": 1200},
    "University of Copenhagen": {"rankingQs": 82, "rankingThe": 79, "estimatedMonthlyLivingCostEur": 1200},
    "Charles University": {"rankingQs": 246, "rankingThe": 236, "estimatedMonthlyLivingCostEur": 650},
    "Czech Technical University in Prague": {"rankingQs": 403, "rankingThe": 501, "estimatedMonthlyLivingCostEur": 650},
    "University of Warsaw": {"rankingQs": 262, "rankingThe": 401, "estimatedMonthlyLivingCostEur": 600},
    "AGH University of Krakow": {"rankingQs": 601, "rankingThe": 601, "estimatedMonthlyLivingCostEur": 550},
    "KU Leuven": {"rankingQs": 61, "rankingThe": 42, "estimatedMonthlyLivingCostEur": 900},
    "Norwegian University of Science and Technology": {"rankingQs": 199, "rankingThe": 201, "estimatedMonthlyLivingCostEur": 1200},
    "University of Oslo": {"rankingQs": 131, "rankingThe": 127, "estimatedMonthlyLivingCostEur": 1300},
    "Universitat Politècnica de Catalunya": {"rankingQs": 319, "rankingThe": 401, "estimatedMonthlyLivingCostEur": 900},
    "Universidad Carlos III de Madrid": {"rankingQs": 310, "rankingThe": 301, "estimatedMonthlyLivingCostEur": 900},
    "Trinity College Dublin": {"rankingQs": 81, "rankingThe": 87, "estimatedMonthlyLivingCostEur": 1400},
    "University College Dublin": {"rankingQs": 126, "rankingThe": 143, "estimatedMonthlyLivingCostEur": 1300},
    "University of Lisbon": {"rankingQs": 230, "rankingThe": 251, "estimatedMonthlyLivingCostEur": 750},
    "University of Porto": {"rankingQs": 253, "rankingThe": 301, "estimatedMonthlyLivingCostEur": 650},
}


def get_curated_programs() -> list[dict]:
    """Return curated program data."""
    return CURATED_PROGRAMS


def get_university_rankings() -> dict:
    """Return university ranking data."""
    return UNIVERSITY_RANKINGS


def save_to_json(data: list[dict], output_path: str):
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"  Saved {len(data)} programs to {output_path}")


if __name__ == "__main__":
    print("=" * 60)
    print("Curated Program Data")
    print("=" * 60)
    programs = get_curated_programs()
    save_to_json(programs, "scripts/data/programs.json")

    # Also save rankings
    with open("scripts/data/rankings.json", "w", encoding="utf-8") as f:
        json.dump(UNIVERSITY_RANKINGS, f, indent=2, ensure_ascii=False)
    print(f"  Saved rankings for {len(UNIVERSITY_RANKINGS)} universities")
