// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAeqourFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    mutate() {
      let currentBase = this.dna[Math.floor(Math.random() * 15)];
      let randomBase = returnRandBase();

      if (currentBase === randomBase) {
        switch (currentBase) {
          case "A":
            this.dna[this.dna.indexOf(currentBase)] = "T";
            break;
          case "T":
            this.dna[this.dna.indexOf(currentBase)] = "C";
            break;
          case "C":
            this.dna[this.dna.indexOf(currentBase)] = "G";
            break;
          case "G":
            this.dna[this.dna.indexOf(currentBase)] = "A";
            break;
          default:
            console.log(`No mutation detected`);
        }
      } else {
        this.dna[this.dna.indexOf(currentBase)] = randomBase;
      }
      return this.dna;
    },

    compareDna(pAequor) {
      let sameBase = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor[i]) {
          sameBase++;
        }
        console.log(` ${Math.round(samebase / 15) * 100} `);
      }
    },

    willLikelySurvive() {
      let survivalBases = 0;
      this.dna.forEach((base) => {
        if (base === "C" || base === "G") {
          survivalBases++;
        }
        return Math.round((survivalBases / 15) * 100 <= 60);
      });
    },
  };
};

//pAeqourFactory(1, mockUpStrand())
//pAeqourFactory(1, mockUpStrand()).mutate()
