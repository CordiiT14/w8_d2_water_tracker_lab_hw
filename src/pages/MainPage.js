import { useState } from 'react';
import Modal from 'react-modal';
import UserContext from '../context/UserContext';

import '../App.css';
import Header from '../components/Header';
import TrackerContainer from '../containers/TrackerContainer';
import { useToggle } from '../hooks';

const MainPage = () => {

    const [name, setName] = useState('Stranger');
    const [goal, setGoal] = useState(1);
    // const [isModalOpen, setIsModalOpen] = useState(true);

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
  
    const handleGoalChange = (e) => {
        setGoal(parseInt(e.target.value))
    }

    // const toggleModal = () => {
    //     setIsModalOpen(!isModalOpen);
    //   }

    let {toggleState, toggle } = useToggle();

    return (
        <>
            <Modal
                isOpen={toggleState}
                ariaHideApp={false}
                contentLabel="User options"
            >
                <label htmlFor='name'>Your name: </label>
                <input type="text" name="name" placeholder={name} onChange={handleNameChange} />
                <br></br>
                <label htmlFor='goal'>Your goal: </label>
                <input type="number" min="1" name="goal" defaultValue={goal} onChange={handleGoalChange} />
                <button onClick={toggle}>OK</button>
            </Modal>
            <div>
                <button onClick={toggle}>Change Name or Goals</button>
            </div>

            <Header name={name}/>
            <UserContext.Provider value={{name, goal}}>
            <TrackerContainer/>
            </UserContext.Provider>
        </>
    )
}

export default MainPage;
