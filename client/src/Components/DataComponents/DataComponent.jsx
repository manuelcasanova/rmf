import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import EditComponent from "./EditComponent";
import { AppContext } from '../../contexts/AppContext';
import { useContext } from "react";

export default function DataComponent({isAM}) {
  const [showFulltips, setShowFulltips] = useState(false);
  const [showAssistanttips, setShowAssistanttips] = useState(false);
  const [showAdultspizzaprice, setShowAdultspizzaprice] = useState(false);
  const [showAdultscocktailprice, setShowhowAdultscocktailprice] = useState(false);
  const [showKidspizzaprice, setShowKidspizzaprice] = useState(false);
  const [showFieldtripprice, setShowFieldtripprice] = useState(false);
  const [showPizzatipspercent, setShowPizzatipspercent] = useState(false);
  const [showKitchentipspercent, setShowKitchentipspercent] = useState(false);
  const [showFronttipspercent, setShowFronttipspercent] = useState(false);
  const [showSundayspizzatip, setShowSundayspizzatip] = useState(false);

  const {
    // Data
    data, setData,

  } = useContext(AppContext);

  const handleEditToggle = (property) => {
    if (property === "fulltips") {
      setShowFulltips((prev) => !prev);
    } else if (property === "assistanttips") {
      setShowAssistanttips((prev) => !prev);
    }
    else if (property === "adultspizzaprice") {
      setShowAdultspizzaprice((prev) => !prev);
    }
    else if (property === "kidspizzaprice") {
      setShowKidspizzaprice((prev) => !prev);
    }
    else if (property === "adultscocktailprice") {
      setShowhowAdultscocktailprice((prev) => !prev);
    }
    else if (property === "fieldtripprice") {
      setShowFieldtripprice((prev) => !prev);
    }
    else if (property === "pizzatipspercent") {
      setShowPizzatipspercent((prev) => !prev);
    }
    else if (property === "kitchentipspercent") {
      setShowKitchentipspercent((prev) => !prev);
    }
    else if (property === "fronttipspercent") {
      setShowFronttipspercent((prev) => !prev);
    }
    else if (property === "sundayspizzatip") {
      setShowSundayspizzatip((prev) => !prev);
    }
  };

  // Function to generate common data line structure
  const generateDataLine = (label, value, show, handleToggle, property, data, setData) => (
    <div>
      <div className="data-line">
        <div className="data-left">{label}</div>
        {/* <div className="data-right">{`${value}`}</div> */}

        <div className="data-right">
          {label.toLowerCase() === 'supervisor / server tips:' ? `${value}%` :
            label.toLowerCase() === 'server support tips:' ? `${value}%` :
              label.toLowerCase() === 'adults pizza price:' ? `${value}$` :
                label.toLowerCase() === 'adults cocktail price:' ? `${value}$` :
                  label.toLowerCase() === 'kids pizza price:' ? `${value}$` :
                    label.toLowerCase() === 'field trip price:' ? `${value}$` :
                      label.toLowerCase() === 'pizza party tips:' ? `${value}%` :
                        label.toLowerCase() === 'kitchen tips:' ? `${value}%` :
                          label.toLowerCase() === 'foh tips:' ? `${value}%` :
                            label.toLowerCase() === 'sundays pizza tips per hour:' ? `${value}$` :
                              null
          }
        </div>


        <FontAwesomeIcon icon={faEdit} onClick={handleToggle} />
      </div>

      {show && (
        <EditComponent
          property={property}
          setShowFulltips={setShowFulltips}
          setShowAssistanttips={setShowAssistanttips}
          setShowAdultspizzaprice={setShowAdultspizzaprice}
          setShowhowAdultscocktailprice={setShowhowAdultscocktailprice}
          setShowKidspizzaprice={setShowKidspizzaprice}
          setShowFieldtripprice={setShowFieldtripprice}
          setShowPizzatipspercent={setShowPizzatipspercent}
          setShowKitchentipspercent={setShowKitchentipspercent}
          setShowFronttipspercent={setShowFronttipspercent}
          setShowSundayspizzatip={setShowSundayspizzatip}
          isAM={isAM}
        />
      )}

    </div>
  );

  return (
    <div className="data-component">
      {generateDataLine("Supervisor / Server Tips:", data[0]?.fulltips, showFulltips, () => handleEditToggle("fulltips"), "fulltips", "fulltips", data, setData)}

      {generateDataLine("Server Support tips:", data[0]?.assistanttips, showAssistanttips, () => handleEditToggle("assistanttips"), "assistanttips", "assistanttips", data, setData)}

      {generateDataLine("Adults Pizza Price:", data[0]?.adultspizzaprice, showAdultspizzaprice, () => handleEditToggle("adultspizzaprice"), "adultspizzaprice", "adultspizzaprice", data, setData)}

      {generateDataLine("Adults Cocktail Price:", data[0]?.adultscocktailprice, showAdultscocktailprice, () => handleEditToggle("adultscocktailprice"), "adultscocktailprice", "adultscocktailprice", data, setData)}

      {generateDataLine("Kids Pizza Price:", data[0]?.kidspizzaprice, showKidspizzaprice, () => handleEditToggle("kidspizzaprice"), "kidspizzaprice", "kidspizzaprice", data, setData)}

      {generateDataLine("Field Trip Price:", data[0]?.fieldtripprice, showFieldtripprice, () => handleEditToggle("fieldtripprice"), "fieldtripprice", "fieldtripprice", data, setData)}

      {generateDataLine("Pizza Party Tips:", data[0]?.pizzatipspercent, showPizzatipspercent, () => handleEditToggle("pizzatipspercent"), "pizzatipspercent", "pizzatipspercent", data, setData)}

      {generateDataLine("Kitchen Tips:", data[0]?.kitchentipspercent, showKitchentipspercent, () => handleEditToggle("kitchentipspercent"), "kitchentipspercent", "kitchentipspercent", data, setData)}

      {generateDataLine("FOH Tips:", data[0]?.fronttipspercent, showFronttipspercent, () => handleEditToggle("fronttipspercent"), "fronttipspercent", "fronttipspercent", data, setData)}

      {generateDataLine("Sundays pizza tips per hour:", data[0]?.sundayspizzatip, showSundayspizzatip, () => handleEditToggle("sundayspizzatip"), "sundayspizzatip", "sundayspizzatip", data, setData)}

    </div>
  );
}




