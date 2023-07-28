function populateCasesByState(d) {
  if (d.state === "Illinois") {
    ilCases.push(+d.cases);
    dates.add(dateParser(d.date));
  }
  if (d.state === "New York") {
    nyCases.push(+d.cases);
  }
  if (d.state === "California") {
    caliCases.push(+d.cases);
  }
  if (d.state === "Texas") {
    texCases.push(+d.cases);
  }
  if (d.state === "Pennsylvania") {
    pennCases.push(+d.cases);
  }
  if (d.state === "Florida") {
    flCases.push(+d.cases);
  }
}

function zeroPadArrays(caliCases, nyCases) {
  caliCases.unshift(0);
  for (let i = 0; i < 191 - 154; i++) {
    nyCases.unshift(0);
  }
}