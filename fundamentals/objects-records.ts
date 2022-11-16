//Records
const artistsByBand: Record<string, string[]> = {
  abba: ["Anni-Frid", "Agnetha", "Benny", "Bjorn"],
  kiss: ["Paul", "Gene", "Ace", "Peter"],
  wham: ["Andrew", "George", "Pepsi", "Shirley"],
};
console.log(artistsByBand.abba);
const rubensFavoriteBandName = "kiss";
console.log(artistsByBand[rubensFavoriteBandName]);
const response = await fetch("http://noRealUrl");
const garysFavoriteBandName = await response.text();
const garysFavoriteArtist = artistsByBand[garysFavoriteBandName];
console.log(garysFavoriteArtist);
