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
      if (this.dna.length != sameBase.length) {
        return false;
      } else {
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === pAequor[i]) {
            sameBase++;
          }
        }
      }
      const thing = Math.floor((sameBase / this.dna) * 100);
    },

    willLikelySurvive() {
      let survival = 0;
      this.dna.forEach((base) => {
        if (base === "C" || base == "G") {
          survival++;
        }
      });
      return Math.floor((survival / this.dna.length) * 100) >= 60;
    },

    complimentStrand() {
      let dnaBase = [];
      this.dna.forEach((base) => {
        switch (base) {
          case "A":
            dnaBase.push("T");
            break;
          case "T":
            dnaBase.push("A");
            break;
          case "C":
            dnaBase.push("G");
            break;
          case "G":
            dnaBase.push("C");
        }
      });
      return dnaBase;
    },
  };
};

const survivingOrganism = () => {
  let survOrg = [];
  for (let i = 1; i <= 30; ) {
    let instance = pAeqourFactory(i, mockUpStrand());
    if (instance.willLikelySurvive() === true) {
      surOrg.push(instance);
      i++;
    }
  }
};

// Test the code

const testDna = pAeqourFactory(1, mockUpStrand());
const testDna2 = pAeqourFactory(2, mockUpStrand());

//Test mutation
console.log(testDna.dna);
console.log(testDna.mutate());

//Test comparing Dna
console.log(testDna.compareDna(testDna2));

//Test likely hood of survival
console.log(testDna.willLikelySurvive());
console.log(testDna2.willLikelySurvive());

// Test doubleHelix
console.log(testDna.dna);
console.log(testDna.complimentStrand());

console.log(testDna2.dna);
console.log(testDna2.complimentStrand());
