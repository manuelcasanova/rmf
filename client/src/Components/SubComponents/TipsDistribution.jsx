//Hooks

import { useContext } from "react";
import { AppContext } from '../../contexts/AppContext';

//Components

import ErrorMessageInputField from "./ErrorMessageInputField";

export default function TipsDistribution({ isAM }) {

  const {


    //Tips

    pizzaTips,
    kitchenTips,
    kitchenTipsPM,
    frontTips,
    frontTipsPM,
    fullTips,
    assistantTips,

    //Prices

    adultsPizzaPrice,
    adultsCocktailPrice,
    kidsPizzaPrice,
    fieldTripPrice,

    //Percentages

    pizzaTipsPercent,

    // Hours

    totalHours,

    // Clear Functions 

    clearServers,

    // Server Hours and Names

    server1Hours, setServer1Hours,
    server2Hours, setServer2Hours,
    server3Hours, setServer3Hours,
    server4Hours, setServer4Hours,
    server5Hours, setServer5Hours,
    server1Name, setServer1Name,
    server2Name, setServer2Name,
    server3Name, setServer3Name,
    server4Name, setServer4Name,
    server5Name, setServer5Name,

    // Assistant Hours and Names
    assistant1Hours, setAssistant1Hours,
    assistant2Hours, setAssistant2Hours,
    assistant3Hours, setAssistant3Hours,
    assistant1Name, setAssistant1Name,
    assistant2Name, setAssistant2Name,
    assistant3Name, setAssistant3Name,

    // Instructor Information

    instructors, showInstructors,
    instructor1Adults, setInstructor1Adults,
    instructor2Adults, setInstructor2Adults,
    instructor3Adults, setInstructor3Adults,
    instructor1Cocktail, setInstructor1Cocktail,
    instructor2Cocktail, setInstructor2Cocktail,
    instructor3Cocktail, setInstructor3Cocktail,
    instructor1Children, setInstructor1Children,
    instructor2Children, setInstructor2Children,
    instructor3Children, setInstructor3Children,
    instructor1FieldTrip, setInstructor1FieldTrip,
    instructor2FieldTrip, setInstructor2FieldTrip,
    instructor3FieldTrip, setInstructor3FieldTrip,
    totalInstructor1,
    totalInstructor2,
    totalInstructor3,
    totalInstructors,


  } = useContext(AppContext);


  return (

    <>
      <section className='tips'>
        <div className='inline'>
          <label className='inline-label'>Kitchen tips</label>
          <div className='tips-input'>
            {!isNaN(pizzaTips) && (isAM ? kitchenTips : kitchenTipsPM)}
          </div>
          {isNaN(pizzaTips)
            &&
            <ErrorMessageInputField />
          }
        </div>


        <div className='inline'>
          <label className='inline-label'>Front tips</label>
          <div className='tips-input'>{!isNaN(pizzaTips) && (isAM ? frontTips : frontTipsPM)}</div>
          {isNaN(pizzaTips)
            &&
            <ErrorMessageInputField />
          }
        </div>


      </section>

      <div className='clear-all-div'>
        <button className="clear-all" onClick={clearServers}>Clear servers</button>
      </div>

      <section className='servers'>

        <div className='th margin-top margin-bottom'>
          <div className='thirty-three server-name-width'>Server</div>
          <div className='thirty-three'>Hours</div>
          <div className='thirty-three'>{fullTips}%</div>
          <div className='thirty-three'>Tips</div>
        </div>


        <div className='server'>
          <input type="text" required value={server1Name} placeholder="Name" className="thirty-three input-width nameinput server-name-width" onChange={(e) => setServer1Name(e.target.value)}></input>
          <input type="number" value={(server1Hours)} className="thirty-three input-width nameinput" onChange={(e) => setServer1Hours(e.target.value)} onClick={() => setServer1Hours("")}
            onFocus={() => setServer1Hours("")}></input>
          <div className="thirty-three">{(isAM ? frontTips : frontTipsPM) !== 0 && server1Hours !== "" && (parseFloat(server1Hours) * fullTips / 100).toFixed(2)}</div>
          <div className="thirty-three">{(isAM ? frontTips : frontTipsPM) !== 0 && server1Hours !== "" && server1Hours > 0 && (


            (isAM ? frontTips : frontTipsPM)

            /

            totalHours * server1Hours).toFixed(2)}</div>
        </div>

        {/* Here */}


        <div className='server'>
          <input value={server2Name} placeholder="Name" className="thirty-three server-name-width nameinput" onChange={(e) => setServer2Name(e.target.value)}></input>
          <input type="number" value={server2Hours} className="thirty-three input-width nameinput" onChange={(e) => setServer2Hours(e.target.value)} onClick={() => setServer2Hours("")}
            onFocus={() => setServer2Hours("")}></input>
          <div className="thirty-three">{(isAM ? frontTips : frontTipsPM) !== 0 && server2Hours !== "" && (parseFloat(server2Hours) * fullTips / 100).toFixed(2)}</div>
          <div className="thirty-three">{(isAM ? frontTips : frontTipsPM) !== 0 && server2Hours !== "" && server1Hours > 0 && ((isAM ? frontTips : frontTipsPM) / totalHours * server2Hours).toFixed(2)}</div>
        </div>

        <div className='server'>
          <input value={server3Name} placeholder="Name" className="thirty-three server-name-width nameinput" onChange={(e) => setServer3Name(e.target.value)}></input>
          <input type="number" value={server3Hours} className="thirty-three input-width nameinput" onChange={(e) => setServer3Hours(e.target.value)} onClick={() => setServer3Hours("")}
            onFocus={() => setServer3Hours("")}></input>
          <div className="thirty-three">{(isAM ? frontTips : frontTipsPM) !== 0 && server3Hours !== "" && (parseFloat(server3Hours) * fullTips / 100).toFixed(2)}</div>
          <div className="thirty-three">{(isAM ? frontTips : frontTipsPM) !== 0 && server3Hours !== "" && server1Hours > 0 && ((isAM ? frontTips : frontTipsPM) / totalHours * server3Hours).toFixed(2)}</div>
        </div>

        <div className='server'>
          <input value={server4Name} placeholder="Name" className="thirty-three server-name-width  nameinput" onChange={(e) => setServer4Name(e.target.value)}></input>
          <input type="number" value={server4Hours} className="thirty-three input-width nameinput" onChange={(e) => setServer4Hours(e.target.value)} onClick={() => setServer4Hours("")}
            onFocus={() => setServer4Hours("")}></input>
          <div className="thirty-three">{(isAM ? frontTips : frontTipsPM) !== 0 && server4Hours !== "" && (parseFloat(server4Hours) * fullTips / 100).toFixed(2)}</div>
          <div className="thirty-three">{(isAM ? frontTips : frontTipsPM) !== 0 && server4Hours !== "" && server1Hours > 0 && ((isAM ? frontTips : frontTipsPM) / totalHours * server4Hours).toFixed(2)}</div>
        </div>

        <div className='server'>
          <input value={server5Name} placeholder="Name" className="thirty-three server-name-width nameinput" onChange={(e) => setServer5Name(e.target.value)}></input>
          <input type="number" value={server5Hours} className="thirty-three input-width nameinput" onChange={(e) => setServer5Hours(e.target.value)} onClick={() => setServer5Hours("")}
            onFocus={() => setServer5Hours("")}></input>
          <div className="thirty-three">{(isAM ? frontTips : frontTipsPM) !== 0 && server5Hours !== "" && (parseFloat(server5Hours) * fullTips / 100).toFixed(2)}</div>
          <div className="thirty-three">{(isAM ? frontTips : frontTipsPM) !== 0 && server5Hours !== "" && server1Hours > 0 && ((isAM ? frontTips : frontTipsPM) / totalHours * server5Hours).toFixed(2)}</div>
        </div>


        <div className='th margin-top margin-bottom'>
          <div className='thirty-three server-name-width'>Support</div>
          <div className='thirty-three'>Hours</div>
          <div className='thirty-three'>{assistantTips}%</div>
          <div className='thirty-three'>Tips</div>
        </div>

        <div className='server'>
          <input value={assistant1Name} placeholder="Name" className="thirty-three server-name-width  nameinput" onChange={(e) => setAssistant1Name(e.target.value)}></input>
          <input type="number" value={assistant1Hours} className="thirty-three input-width nameinput" onChange={(e) => setAssistant1Hours(e.target.value)} onFocus={() => setAssistant1Hours("")} onClick={() => setAssistant1Hours("")}></input>
          <div className="thirty-three">{(isAM ? frontTips : frontTipsPM) !== 0 && assistant1Hours !== "" && (parseFloat(assistant1Hours) * assistantTips / 100).toFixed(2)}</div>
          <div className="thirty-three">{(isAM ? frontTips : frontTipsPM) !== 0 && assistant1Hours !== "" && server1Hours > 0 && ((isAM ? frontTips : frontTipsPM) / totalHours * assistant1Hours * assistantTips / 100).toFixed(2)}</div>
        </div>

        <div className='server'>
          <input value={assistant2Name} placeholder="Name" className="thirty-three server-name-width nameinput" onChange={(e) => setAssistant2Name(e.target.value)}></input>
          <input type="number" value={assistant2Hours} className="thirty-three input-width nameinput" onChange={(e) => setAssistant2Hours(e.target.value)} onFocus={() => setAssistant2Hours("")} onClick={() => setAssistant2Hours("")}></input>
          <div className="thirty-three">{(isAM ? frontTips : frontTipsPM) !== 0 && assistant2Hours !== "" && (parseFloat(assistant2Hours) * assistantTips / 100).toFixed(2)}</div>
          <div className="thirty-three">{(isAM ? frontTips : frontTipsPM) !== 0 && assistant2Hours !== "" && server1Hours > 0 && ((isAM ? frontTips : frontTipsPM) / totalHours * assistant2Hours * assistantTips / 100).toFixed(2)}</div>
        </div>

        <div className='server'>
          <input value={assistant3Name} placeholder="Name" className="thirty-three server-name-width nameinput" onChange={(e) => setAssistant3Name(e.target.value)}></input>
          <input type="number" value={assistant3Hours} className="thirty-three input-width nameinput" onChange={(e) => setAssistant3Hours(e.target.value)} onFocus={() => setAssistant3Hours("")} onClick={() => setAssistant1Hours("")}></input>
          <div className="thirty-three">{(isAM ? frontTips : frontTipsPM) !== 0 && assistant3Hours !== "" && (parseFloat(assistant3Hours) * assistantTips / 100).toFixed(2)}</div>
          <div className="thirty-three">{(isAM ? frontTips : frontTipsPM) !== 0 && assistant3Hours !== "" && server1Hours > 0 && ((isAM ? frontTips : frontTipsPM) / totalHours * assistant3Hours * assistantTips / 100).toFixed(2)}</div>
        </div>




      </section>

      <section className='servers'>
        <div className='th margin-top margin-bottom'>
          <div className='thirty-three'>Pizza instructors</div>
          <div className="thirty-three"></div>
          <div className="thirty-three"></div>
          <div className="thirty-three">{!isNaN(pizzaTips) && pizzaTips.toFixed(2)}</div>
        </div>
      </section>


      <div className='pizza-making-question'>

        {!instructors && <div className='padding-bottom'>
          <button className='clear-all' onClick={showInstructors}>More than one pizza maker?</button>

        </div>
        }


        {instructors && <div>
          <button className='clear-all-x' onClick={showInstructors}>X</button>

        </div>}

        {instructors &&
          <div className='instructors'>



            {parseInt(totalInstructors) !== parseInt(pizzaTips) &&

              <section className='servers warning-message'>
                <div className='warning-message'>Warning!! The pizza instructors' tips and the tips distributed amongst the 3 instructors do not match! The sum of the total tips for the three instructors must match the total pizza instructor tips shown above:</div>
                <div className='warning-message-inside'>{pizzaTips}$.</div>
                <div className='warning-message-inside'>Currently, the total of the tips for the three instructors listed below is:</div>
                <div className='warning-message-inside'>{parseFloat(totalInstructors).toFixed(2)} $.</div>
              </section>
            }

            <div className='instructor'>
              <div className='instructor-detail'>Instructor 1:</div>


              <div className='instructor-detail'>

                <div>Adults:</div>
                <input type="number" value={instructor1Adults} className="instructor-detail-input" onChange={(e) => setInstructor1Adults(e.target.value)} onFocus={() => setInstructor1Adults("")} onClick={() => setInstructor1Adults("")}></input>
                <div >{frontTips !== 0 && instructor1Adults !== "" && (parseFloat(instructor1Adults) * adultsPizzaPrice * pizzaTipsPercent / 100).toFixed(2)}</div>
              </div>

              <div className='instructor-detail'>

                <div>Cocktail:</div>
                <input type="number" value={instructor1Cocktail} className="instructor-detail-input" onChange={(e) => setInstructor1Cocktail(e.target.value)} onFocus={() => setInstructor1Cocktail("")} onClick={() => setInstructor1Cocktail("")}></input>
                <div >{frontTips !== 0 && instructor1Cocktail !== "" && (parseFloat(instructor1Cocktail) * adultsCocktailPrice * pizzaTipsPercent / 100).toFixed(2)}</div>
              </div>

              <div className='instructor-detail'>

                <div>Children:</div>
                <input type="number" value={instructor1Children} className="instructor-detail-input" onChange={(e) => setInstructor1Children(e.target.value)} onFocus={() => setInstructor1Children("")} onClick={() => setInstructor1Children("")}></input>
                <div >{frontTips !== 0 && instructor1Children !== "" && (parseFloat(instructor1Children) * kidsPizzaPrice * pizzaTipsPercent / 100).toFixed(2)}</div>
              </div>

              <div className='instructor-detail'>

                <div>Field Trip:</div>
                <input type="number" value={instructor1FieldTrip} className="instructor-detail-input" onChange={(e) => setInstructor1FieldTrip(e.target.value)} onFocus={() => setInstructor1FieldTrip("")} onClick={() => setInstructor1FieldTrip("")}></input>
                <div >{frontTips !== 0 && instructor1FieldTrip !== "" && (parseFloat(instructor1FieldTrip) * fieldTripPrice * pizzaTipsPercent / 100).toFixed(2)}</div>
              </div>



              <div className='instructor-detail'>Total Instructor 1: {totalInstructor1} $</div>

            </div>


            <div className='instructor'>
              <div className='instructor-detail'>Instructor 2:</div>






              <div className='instructor-detail'>

                <div>Adults:</div>
                <input type="number" value={instructor2Adults} className="instructor-detail-input" onChange={(e) => setInstructor2Adults(e.target.value)} onFocus={() => setInstructor2Adults("")} onClick={() => setInstructor2Adults("")}></input>
                <div >{frontTips !== 0 && instructor2Adults !== "" && (parseFloat(instructor2Adults) * adultsPizzaPrice * pizzaTipsPercent / 100).toFixed(2)}</div>
              </div>

              <div className='instructor-detail'>

                <div>Cocktail:</div>
                <input type="number" value={instructor2Cocktail} className="instructor-detail-input" onChange={(e) => setInstructor2Cocktail(e.target.value)} onFocus={() => setInstructor2Cocktail("")} onClick={() => setInstructor2Cocktail("")}></input>
                <div >{frontTips !== 0 && instructor2Cocktail !== "" && (parseFloat(instructor2Cocktail) * adultsCocktailPrice * pizzaTipsPercent / 100).toFixed(2)}</div>
              </div>

              <div className='instructor-detail'>

                <div>Children:</div>
                <input type="number" value={instructor2Children} className="instructor-detail-input" onChange={(e) => setInstructor2Children(e.target.value)} onFocus={() => setInstructor2Children("")} onClick={() => setInstructor2Children("")}></input>
                <div >{frontTips !== 0 && instructor2Children !== "" && (parseFloat(instructor2Children) * kidsPizzaPrice * pizzaTipsPercent / 100).toFixed(2)}</div>
              </div>

              <div className='instructor-detail'>

                <div>Field Trip:</div>
                <input type="number" value={instructor2FieldTrip} className="instructor-detail-input" onChange={(e) => setInstructor2FieldTrip(e.target.value)} onFocus={() => setInstructor2FieldTrip("")} onClick={() => setInstructor2FieldTrip("")}></input>
                <div >{frontTips !== 0 && instructor2FieldTrip !== "" && (parseFloat(instructor2FieldTrip) * fieldTripPrice * pizzaTipsPercent / 100).toFixed(2)}</div>
              </div>



              <div className='instructor-detail'>Total Instructor 1: {totalInstructor2} $</div>

            </div>


            <div className='instructor'>
              <div className='instructor-detail'>Instructor 3:</div>






              <div className='instructor-detail'>

                <div>Adults:</div>
                <input type="number" value={instructor3Adults} className="instructor-detail-input" onChange={(e) => setInstructor3Adults(e.target.value)} onFocus={() => setInstructor3Adults("")} onClick={() => setInstructor3Adults("")}></input>
                <div >{frontTips !== 0 && instructor3Adults !== "" && (parseFloat(instructor3Adults) * adultsPizzaPrice * pizzaTipsPercent / 100).toFixed(2)}</div>
              </div>

              <div className='instructor-detail'>

                <div>Cocktail:</div>
                <input type="number" value={instructor3Cocktail} className="instructor-detail-input" onChange={(e) => setInstructor3Cocktail(e.target.value)} onFocus={() => setInstructor3Cocktail("")} onClick={() => setInstructor3Cocktail("")}></input>
                <div >{frontTips !== 0 && instructor3Cocktail !== "" && (parseFloat(instructor3Cocktail) * adultsCocktailPrice * pizzaTipsPercent / 100).toFixed(2)}</div>
              </div>

              <div className='instructor-detail'>

                <div>Children:</div>
                <input type="number" value={instructor3Children} className="instructor-detail-input" onChange={(e) => setInstructor3Children(e.target.value)} onFocus={() => setInstructor3Children("")} onClick={() => setInstructor3Children("")}></input>
                <div >{frontTips !== 0 && instructor3Children !== "" && (parseFloat(instructor3Children) * kidsPizzaPrice * pizzaTipsPercent / 100).toFixed(2)}</div>
              </div>

              <div className='instructor-detail'>

                <div>Field Trip:</div>
                <input type="number" value={instructor3FieldTrip} className="instructor-detail-input" onChange={(e) => setInstructor3FieldTrip(e.target.value)} onFocus={() => setInstructor3FieldTrip("")} onClick={() => setInstructor3FieldTrip("")}></input>
                <div >{frontTips !== 0 && instructor3FieldTrip !== "" && (parseFloat(instructor3FieldTrip) * fieldTripPrice * pizzaTipsPercent / 100).toFixed(2)}</div>
              </div>



              <div className='instructor-detail'>Total Instructor 3: {totalInstructor3} $</div>

            </div>


          </div>
        }
      </div>
    </>


  )

}