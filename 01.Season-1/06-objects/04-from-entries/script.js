// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];

    // your code here

    const objFromEntries = Object.fromEntries(keys.map((_, i) => [keys[i], values[i]]));
    
    document.getElementById("run").addEventListener("click", () => {
        console.log("Object's from keys : " + JSON.stringify(objFromEntries));
    });

})();
