/**
 * @typedef {{
 *  id: number,
 *  name: string,
 *  age: number,
 *  isWorkExperience: boolean
 * }} Student
 * @description renders students into body replacing all
 * @param {Student[]} students
 * @return {void}
 */
export function populateTable(students) {
  const header =
    `<tr>
      <td>id</td>
      <td>name</td>
      <td>age</td>
      <td>isWorkExperience</td>
    </tr>`;

  const studentsRows = students.map(({id, name, age, isWorkExperience}) => {
    const workExperience = isWorkExperience ? 'yes' : 'no';

    return `
      <tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${age}</td>
        <td>${workExperience}</td>
      </tr>`;
  });

  const table = `
    <table>
      ${header}
      ${studentsRows.join('')}
    </table>`;

  // eslint-disable-next-line no-undef
  document.body.innerHTML = table;
}
