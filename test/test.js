const expect = require('chai').expect;
const dieties = require('../src/index.js');

describe('all', () => {
  it('Should return an array if called without argument', () =>
    expect(dieties.all()).to.be.an('array')
  );

  it('Should contain Bacchus if called with roman as an argument', () => {
    expect(dieties.all('roman')).to.include('Bacchus');
  });

  it('Should contain Baldr if called with norse as an argument', () => {
    expect(dieties.all('norse')).to.include('Baldr');
  });
});

describe('random', () => {
  it('Should return a random diety', () => {
    const diety = dieties.random();
    expect(dieties.all()).to.include(diety);
  })

  it('Should return one random roman diety if passed one and the roman argument', () => {
    const diety = dieties.random(1, 'roman');
    expect(dieties.all('roman')).to.include(diety);
  })

  it('Should return a an array of random dieties if passed a number', () => {
    const random = dieties.random(3);
    expect(random).to.have.length(3).and.to.be.an('array');
    expect(dieties.all()).to.include.members(random);
  });

  it('Should return a an array of random norse dieties if passed a number and the norse argument', () => {
    const random = dieties.random(3, 'norse');
    expect(random).to.have.length(3).and.to.be.an('array');
    expect(dieties.all('norse')).to.include.members(random);
  });

  it('Should throw an error if numbers below 1 are passed as parameter', () => {
    expect(() => dieties.random(-1)).to.throw(Error);
  })
})
