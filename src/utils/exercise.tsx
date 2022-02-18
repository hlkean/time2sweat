interface Exercise {
    name: string;
    difficulty: number;
}

interface ExerciseGroup {
    [key: string]: Array<Exercise>;
}

interface Set {
    duration: number;
    resting: boolean;
    exercise?: object;
}

const exerciseList : ExerciseGroup = {
    chest: [
        {name: "Pushup", difficulty: 7},
        {name: "Diamond Pushup", difficulty: 10},
        {name: "Downward Dog Pushup", difficulty: 10},
        {name: "Pushup Plank", difficulty: 5},
        {name: "Burpee", difficulty: 8},
    ],
    legs: [
        {name: "Air Squat", difficulty: 5},
        {name: "Bullfrog", difficulty: 8},
        {name: "Jump Squat", difficulty: 8},
        {name: "Tuck Jump", difficulty: 8},
        {name: "Burpee", difficulty: 8},
        {name: "Lunges", difficulty: 6},
        {name: "A Step", difficulty: 4},
        {name: "Step Ups", difficulty: 6},
        {name: "Frog Jumps", difficulty: 6},
        {name: "Ice Skaters", difficulty: 6},
        {name: "Sprawls", difficulty: 9}
    ],
    shoulders: [
        {name: "Stick Ups", difficulty: 4},
        {name: "Lateral Raises", difficulty: 6},
        {name: "Front Raises", difficulty: 6},
        {name: "Shoulder Press", difficulty: 6},
        {name: "Rows", difficulty: 6},
    ],
    biceps: [
        {name: "Curls", difficulty: 6},
        {name: "Hammer Curls", difficulty: 6}
    ],
    triceps: [
        {name: "Tricep Pushups", difficulty: 7},
        {name: "French Press", difficulty: 6},
        {name: "Dips", difficulty: 6}
    ],
    abs: [
        {name: "Plank", difficulty: 8},
        {name: "Crunches", difficulty: 5},
        {name: "Russian Twists", difficulty: 5},
        {name: "Jack Knife Crunch", difficulty: 6},
        {name: "Bicycles", difficulty: 6},
        {name: "Scissor Kicks", difficulty: 6},
        {name: "Mountain Climbers", difficulty: 6},
        {name: "Bears", difficulty: 6},
        {name: "Hollow Body Hold", difficulty: 6},

    ],
    back: [
        {name: "Supermans", difficulty: 6},
        {name: "Reverse Flies", difficulty: 6}
    ]

};

export function createWorkout(length : number) {
    let list: Exercise[] = [];
    for(let i = 0; i<length; i++) {
        const rando = Math.floor(Math.random()*Object.keys(exerciseList).length);
        const muscle = exerciseList[Object.keys(exerciseList)[rando]];
        console.log(muscle);
        const rando2 = Math.floor(Math.random()*muscle.length);
        if(list.includes(muscle[rando2], 0)){
            i--;
        } else {
            list.push(muscle[rando2]);
        }
    }
    return list;
}

export function generateSets(list: Exercise[]) {
    let sets: Array<Set> = [];
    list.forEach((exercise) => {
        sets.push({duration: 6, resting: false, exercise});
        sets.push({duration: 2, resting: true});
    })
    return sets;
}