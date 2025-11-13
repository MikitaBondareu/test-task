import React from 'react';

import { Button } from '@/src/shared/components/ui/button';
import ModalWindow from '@/src/shared/ui/Modal/ModalWindow';

import CreateUserForm from '../ui/CreateUserForm/CreateUserForm';

const CreateUserModal = () => {
  return (
    <ModalWindow
      title={'Create a Client'}
      button={<Button>Create a Client</Button>}
    >
      <CreateUserForm />
    </ModalWindow>
  );
};

export default CreateUserModal;
