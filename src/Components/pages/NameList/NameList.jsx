import React, {useState, useEffect} from 'react';
import NameListItem from './NameListItem';

function NameList(){
    const [loadData, setLoadData] = useState(false);
    const [nameList, setNameList] = useState([{
        name: {
            firstName : 'Rajitha',
            lastName : 'Mendis'
        },
        location:{
            city: 'Colombo'
        },
        email : 'rajitha23mendis@gmail.com',
        dob: {
        date: '1992-03-08T15:13:16.688Z',
        age: 30
        },
        picture: {
        medium: 'https://randomuser.me/api/portraits/med/men/75.jpg'
        },

    },
    {
        name: {
            firstName : 'Wathmini',
            lastName : 'Mendis'
        },
        location:{
            city: 'Kandy'
        },
        email : 'wathmi@gmail.com',
        dob: {
        date: '1991-03-08T15:13:16.688Z',
        age: 30
        },
        picture: {
        medium: 'https://randomuser.me/api/portraits/med/women/7.jpg'
        },

    }]);


    useEffect(() => {
        fetch("https://randomuser.me/api")
        .then((response) => {
            return response.json();
        }).then((responseData)=>{
            setNameList(nameList => [...nameList,responseData.results[0]]);
        });
    }, [loadData]);

    const nameListComponenets = () =>{
       return nameList.map((aName) => {

        return (
            <NameListItem 
            name = {aName.name.firstName + " " + aName.name.lastName}
            location = {aName.location.city}
            email = {aName.email}
            birthday = {aName.dob.date}
            avatar = {aName.picture.medium}
            />
         );
       });
    };

    // return (
    //     <div>
    //         <NameListItem 
    //         name = {nameList[0].name.firstName + " " + nameList[0].name.lastName}
    //         location = {nameList[0].location.city}
    //         email = {nameList[0].email}
    //         birthday = {nameList[0].dob.date}
    //         avatar = {nameList[0].picture.medium}
    //         />
    //         <NameListItem 
    //         name = {nameList[1].name.firstName + " " + nameList[1].name.lastName}
    //         location = {nameList[1].location.city}
    //         email = {nameList[1].email}
    //         birthday = {nameList[1].dob.date}
    //         avatar = {nameList[1].picture.medium}
    //         />
    //     </div>
    // );

    const addUserHandler = () => {
        setLoadData(true);
    //    const newUser = {
    //     name: {
    //         firstName : 'Nonimi',
    //         lastName : 'Mendis'
    //     },
    //     location:{
    //         city: 'Anuradhapura'
    //     },
    //     email : 'wathmi@gmail.com',
    //     dob: {
    //     date: '1991-03-08T15:13:16.688Z',
    //     age: 30
    //     },
    //     picture: {
    //     medium: 'https://randomuser.me/api/portraits/med/women/7.jpg'
    //     },
    //    };
    //    //setNameList((nameList) => nameList.concat(newUser));
    //    //spread operator
    //    setNameList(nameList => [...nameList, newUser]);
    }

    return (
        <div className="container mt-4">
            <button className="btn btn-primary mb-2" onClick={addUserHandler}>Add Name</button>
            <ul className="list-group">{nameListComponenets()}</ul>
        </div>
    );
}

export default NameList;