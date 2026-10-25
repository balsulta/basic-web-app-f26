export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  const arithmeticMatch = query.match(
    /what is (-?\d+(?: (?:plus|minus|multiplied by) -?\d+)+)\??$/i
  );
  if (arithmeticMatch) {
    const tokens = arithmeticMatch[1].toLowerCase().split(" ").filter((t) => t !== "by");
    // Multiplication first, then addition/subtraction left to right
    const terms: number[] = [Number(tokens[0])];
    const ops: string[] = [];
    for (let i = 1; i < tokens.length; i += 2) {
      const n = Number(tokens[i + 1]);
      if (tokens[i] === "multiplied") {
        terms[terms.length - 1] *= n;
      } else {
        ops.push(tokens[i]);
        terms.push(n);
      }
    }
    let result = terms[0];
    for (let i = 0; i < ops.length; i++) {
      result = ops[i] === "plus" ? result + terms[i + 1] : result - terms[i + 1];
    }
    return result.toString();
  }

  const powerMatch = query.match(/what is (\d+) to the power of (\d+)/i);
  if (powerMatch) {
    const base = BigInt(powerMatch[1]);
    let result = BigInt(1);
    for (let i = 0; i < parseInt(powerMatch[2]); i++) {
      result *= base;
    }
    return result.toString();
  }

  if (query.toLowerCase().includes("primes")) {
    const numbers = (query.match(/\d+/g) || []).map(Number);
    const isPrime = (n: number) => {
      if (n < 2) return false;
      for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
      }
      return true;
    };
    return numbers.filter(isPrime).join(", ");
  }

  if (query.toLowerCase().includes("largest")) {
    const numbers = (query.match(/-?\d+/g) || []).map(Number);
    if (numbers.length > 0) {
      return Math.max(...numbers).toString();
    }
  }

  if (query.toLowerCase().includes("name")) {
    return "bashayer";
  }

  if (query.toLowerCase().includes("age")) {
    return "67";
  }

   if (query.toLowerCase().includes("andrew id")) {
       return "balsulta";
     }

  return "";
}
