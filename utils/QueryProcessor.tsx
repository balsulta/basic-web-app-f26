export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  const addMatch = query.match(/what is (-?\d+) plus (-?\d+)/i);
  if (addMatch) {
    return (parseInt(addMatch[1]) + parseInt(addMatch[2])).toString();
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
