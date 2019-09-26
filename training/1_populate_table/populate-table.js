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
  // eslint-disable-next-line no-undef
  const document = window.document;

  const header = document.createElement('tr');

  const columns = ['id', 'name', 'age', 'isWorkExperience']
      .map((text) => {
        const td = document.createElement('td');
        td.textContent = text;
        return td;
      });

  columns.forEach((column) => {
    header.appendChild(column);
  });

  const studentsRows = students.map(({id, name, age, isWorkExperience}) => {
    const workExperience = isWorkExperience ? 'yes' : 'no';

    const columns = [id, name, age, workExperience].map((text) => {
      const td = document.createElement('td');
      td.textContent = text;
      return td;
    });

    const row = document.createElement('tr');
    columns.forEach((column) => {
      row.appendChild(column);
    });

    return row;
  });

  const table = document.createElement('table');
  table.appendChild(header);

  studentsRows.forEach((row) => {
    table.appendChild(row);
  });

  document.body.appendChild(table);
}
