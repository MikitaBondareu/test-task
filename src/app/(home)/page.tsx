import { Button } from '@/components/ui/button';
import CreateUserForm from '@/src/features/User/ui/CreateUserForm';
import ModalWindow from '@/src/shared/ui/Modal/ModalWindow';

export default function Home() {
  return (
    <>
      <ModalWindow
        title={'Create a Client'}
        button={<Button>Create a Client</Button>}
        footerContent={<h1>FOOTER</h1>}
      >
        <CreateUserForm />
      </ModalWindow>
      {/* <CreateUserForm /> */}
    </>
  );
}
