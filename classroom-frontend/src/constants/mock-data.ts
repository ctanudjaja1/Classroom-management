import {Subject} from "@/types";


export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "Computer Science",
        description:
            "An introductory course covering fundamental programming concepts, problem solving techniques, and basic algorithms using a high level programming language.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 2,
        code: "MATH221",
        name: "Linear Algebra",
        department: "Mathematics",
        description:
            "Focuses on vectors, matrices, systems of linear equations, and linear transformations, with applications in science and engineering.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 3,
        code: "ENG205",
        name: "Technical Writing",
        department: "English",
        description:
            "Develops clear and effective written communication skills for technical and professional contexts, including reports, documentation, and presentations.",
        createdAt: new Date().toISOString(),
    }
];