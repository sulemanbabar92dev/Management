'use client'
import React from 'react'
import Modal from "@/components/ui/page" 

const DeleteUser = ({ deleteModal, setDeleteModal,userToDelete,setUser }) => {

    const handleDeleteConfirmed = (id) => {
    setUser(prev => prev.filter(u => u.id !== id));
    setDeleteModal(false)
  };
  return (
    <Modal isOpen={deleteModal} onClose={() => setDeleteModal(false)}>
      <div className='p-3'>
        <h2 className="text-lg font-bold mb-3">Delete User</h2>
        <p className='pl-1'>Do you want to delete this user? </p>

        <div className="flex justify-end gap-3 m-2">
          <button
            className="px-3 py-1 rounded-2xl bg-gray-300 hover:bg-gray-200"
            onClick={()=>setDeleteModal(false)}
            >
            Cancel
          </button>
          <button
            
            className="px-3 py-1 rounded-2xl bg-red-600 text-white hover:bg-red-700"
            onClick={()=>{
              if(userToDelete){
                handleDeleteConfirmed(userToDelete.id)
              }
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default DeleteUser
