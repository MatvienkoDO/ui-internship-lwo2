export const GOLF_SCORES = {
    HOLE_IN_ONE: 0,
    EAGLE: 1,
    BIRDIE: 2,
    PAR: 3,
    BOGEY: 4,
    DOUBLE_BOGEY: 5,
    GO_HOME: 6
}

export function golfScore(par, strokes) {
    const {
        HOLE_IN_ONE,
        EAGLE,
        BIRDIE,
        PAR,
        BOGEY,
        DOUBLE_BOGEY,
        GO_HOME
    } = GOLF_SCORES;

    if(strokes === 1) {
        return HOLE_IN_ONE;
    }

    if(strokes <= par - 2) {
        return EAGLE;
    }

    if(strokes === par - 1) {
        return BIRDIE;
    }

    if(strokes === par) {
        return PAR;
    }

    if(strokes === par + 1) {
        return BOGEY;
    }

    if(strokes === par + 2) {
        return DOUBLE_BOGEY;
    }

    return GO_HOME;
}