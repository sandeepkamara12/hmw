let quarters = [];
const currentYear = new Date().getFullYear().toString().substring(2);

for (var i = 1; i <= 4; i++) {
  quarters.push({
    value: `Q${i} FY${currentYear}`,
    label: `Q${i} FY${currentYear}`,
  });
}

export default quarters;
