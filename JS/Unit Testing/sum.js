export const sum = (...numbers) => {

    if (numbers.length === 0)
        return 0;
  
  let total = 0;
  
  for (let i = 0 ; i < numbers.length; i++) {
        const value = numbers[i];
        if (typeof value  !== "number" || Number.isNaN(value)) {
            throw new Error ("All values must be numbers.")
        }

        total += value;
    }
    return total;
  };

