export const Ship = (len) => {
    const length = len;
    let hits = 0;
    const hit = function(){
        this.hits += 1;
    }

    return {length, hit, hits};
}