// components/Content.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import StudentTable from './StudentTable';
import AddStudentModal from './AddStudentModal';

const Content = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="w-3/4 p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Student Management</h1>
      </header>

      <button
        onClick={() => setIsAddModalOpen(true)}
        className="mb-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add Student
      </button>

      <StudentTable />

      <AddStudentModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </div>
  );
};

export default Content;
