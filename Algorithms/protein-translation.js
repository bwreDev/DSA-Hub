const proteins = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCA: 'Serine',
  UCG: 'Serine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UAA: 'STOP',
  UAG: 'STOP',
  UGA: 'STOP',
};

const translate = (str) => {
  const newProteins = [];
  if (!str) {
    return newProteins;
  } else if (str) {
    for (let i = 0; i < str.length; i += 3) {
      let codon = str.substr(i, 3);
      let protein = proteins[codon];
      if (protein === undefined) throw new Error('Invalid codon');
      if (protein === 'STOP') break;
      newProteins.push(protein);
    }
    return newProteins;
  }
};
