import React from "react";
import ReactDOM from "react-dom";
import "./Profile.css";
import "tachyons";
import Profilelist from "./Profilelist";

const Profile = (props) => {
  const profilelistarray = [
    {
      id: 1,
      name: `mandis990`,
      work: `baddy`,
    },
    {
      id: 2,
      name: `Subo`,
      work: `Football`,
    },
    {
      id: 3,
      name: `IAS`,
      work: `Football`,
    },
    {
      id: 4,
      name: `D.deTRO`,
      work: `Basketball`,
    },
    {
      id: 5,
      name: `princI`,
      work: `Basketball`,
    },
    {
        id: 6,
        name: `Vatsal`,
        work:  `gamer`
    },
    {
        id: 7,
        name: `BhatIYA`,
        work: `Basketball`
    }
  ];

  // map(callbackfuntion(currenValue, index, array) argument)
 const newprofilearray = profilelistarray.map((newArray, i) => {
    return (
      <Profilelist
        id={profilelistarray[i].name}
        name={profilelistarray[i].name}
        work={profilelistarray[i].name}
      />
    );
  });

  return (
    <div>
      <h1 className=" heading tc">SBI PROFILE</h1>

      {/* hardcore method :-
      <Profilelist id={profilelistarray[0].name} 
                          name={profilelistarray[0].name} 
                          work={profilelistarray[0].name} />

      <Profilelist id={profilelistarray[1].name} 
                          name={profilelistarray[1].name} 
                          work={profilelistarray[1].name} />

      <Profilelist id={profilelistarray[2].name} 
                          name={profilelistarray[2].name} 
                          work={profilelistarray[2].name} />

      <Profilelist id={profilelistarray[3].name} 
                          name={profilelistarray[3].name} 
                          work={profilelistarray[3].name} />

      <Profilelist id={profilelistarray[4].name} 
                          name={profilelistarray[4].name} 
                          work={profilelistarray[4].name} /> */}

        {/* Using mapFunction :  */}

                          {newprofilearray}

      <button>Enter</button>
    </div>
  );
};

export default Profile;
