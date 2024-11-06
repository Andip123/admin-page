// components/StudentTable.js
import React from 'react';
import Swal from 'sweetalert2';

const StudentTable = () => {
  const students = [
    { id: 1, name: 'John Doe', age: 20 },
    { id: 2, name: 'Jane Smith', age: 22 },
    // Add more mock data as needed
  ];

  const handleEdit = (student) => {
    // Logic to open the edit modal with student data
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Logic to delete student
        Swal.fire('Deleted!', 'The student has been deleted.', 'success');
      }
    });
  };

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2">ID</th>
          <th className="py-2">Name</th>
          <th className="py-2">Age</th>
          <th className="py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td className="py-2">{student.id}</td>
            <td className="py-2">{student.name}</td>
            <td className="py-2">{student.age}</td>
            <td className="py-2">
              <button
                onClick={() => handleEdit(student)}
                className="mr-2 bg-yellow-500 text-white py-1 px-3 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(student.id)}
                className="bg-red-500 text-white py-1 px-3 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
