import { useState } from "react";
import bgDesktop from "./assets/images/bg-sidebar-desktop.svg";
import bgMobile from "./assets/images/bg-sidebar-mobile.svg";
import Arcade from "./assets/images/icon-arcade.svg";
import Advanced from "./assets/images/icon-advanced.svg";
import Pro from "./assets/images/icon-pro.svg";
import Thanks from "./assets/images/icon-thank-you.svg";
function App() {
  const plans = ["Arcade", "Advanced", "Pro"];
  const addOns = ["Online service", "Large storage", "Customizable profile"];
  const planPrices = [
    {
      monthly: "$9/mo",
      yearly: "$90/yr",
      mp: 9,
      yp: 90,
    },
    {
      monthly: "$12/mo",
      yearly: "$120/yr",
      mp: 12,
      yp: 120,
    },
    {
      monthly: "$15/mo",
      yearly: "$150/yr",
      mp: 15,
      yp: 150,
    },
  ];
  const addOnPrices = [
    {
      monthly: "$1/mo",
      yearly: "$10/yr",
      mp: 1,
      yp: 10,
    },
    {
      monthly: "$2/mo",
      yearly: "$20/yr",
      mp: 2,
      yp: 20,
    },
    {
      monthly: "$3/mo",
      yearly: "$30/mo",
      mp: 3,
      yp: 30,
    },
  ];
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [total, setTotal] = useState<string>();
  const [active, setActive] = useState(1);
  const [activePlan, setActivePlan] = useState(0);
  const [activeAddOns, setActiveAddOns] = useState<Array<number>>([]);
  const [myswitch, setmySwitch] = useState(false);
  const [nameReq, setNameReq] = useState(false);
  const [emailReq, setEmailReq] = useState(false);
  const [phoneReq, setPhoneReq] = useState(false);
  const [sent, setSent] = useState(false);
  const checkFields = () => {
    if (name?.length === 0) setNameReq(true);
    else setNameReq(false);
    if (email?.length === 0) setEmailReq(true);
    else setEmailReq(false);
    if (phone?.length === 0) setPhoneReq(true);
    else setPhoneReq(false);
    return (
      !(name?.length === 0) && !(email?.length === 0) && !(phone?.length === 0)
    );
  };
  const calculateTotal = () => {
    let total = 0;
    total += myswitch ? planPrices[activePlan].yp : planPrices[activePlan].mp;
    activeAddOns.forEach((item) => {
      total += myswitch ? addOnPrices[item].yp : addOnPrices[item].mp;
    });
    setTotal(myswitch ? `$${total}/yr` : `$${total}/mo`);
  };
  const handleNextStep = () => {
    if (!checkFields()) return;
    if (active === 3) calculateTotal();
    if (active !== 4) setActive(active + 1);
    else {
      setSent(true);
    }
  };
  const handleAddAddOns = (n: number) => {
    const addons = [...activeAddOns];
    let newAddons: number[];
    if (addons.includes(n)) {
      newAddons = addons.filter((value) => {
        return value !== n;
      });
    } else {
      addons.push(n);
      newAddons = addons;
    }
    setActiveAddOns(newAddons);
  };
  return (
    <div className="flex justify-center items-center mobile:w-full mobile:p-4 h-screen w-screen App">
      <div className="bg-white rounded-lg mobile:w-full mobile:flex form p-3">
        <div className="container mobile:flex-col msm:justify-center msm:items-center flex">
          <div className="relative mobile:absolute mobile:top-7 mobile:left-11 flex steps-div">
            <img
              className="menu-img h-full object-fill"
              src={bgDesktop}
              alt=""
            />
            <div className="absolute gap-8 flex flex-col left-7 top-5 mobile:flex-row mobile:gap-0 mobile:-top-5 steps">
              <div className="container items-center gap-5 flex step text-white">
                <div
                  className={`border-solid border-2 px-3 py-1.5 rounded-full text-sm font-bold num ${
                    active === 1 ? "active" : ""
                  }`}
                >
                  1
                </div>
                <div className="flex flex-col step-text-div mobile:mt-20">
                  <p className="mobile:hidden uppercase step-no text-gray-400 text-xs">
                    step 1
                  </p>
                  <h1 className="mobile:hidden lg:text-sm uppercase step-info font-bold text-xs tracking-wider">
                    Your Info
                  </h1>
                </div>
              </div>
              <div className="items-center gap-5 flex step text-white">
                <div
                  className={`border-solid border-2 px-3 py-1.5 rounded-full text-sm font-bold num ${
                    active === 2 ? "active" : ""
                  }`}
                >
                  2
                </div>
                <div className="flex flex-col step-text-div">
                  <p className="mobile:hidden uppercase step-no text-gray-400 text-xs">
                    step 2
                  </p>
                  <p className="mobile:hidden lg:text-sm uppercase step-info font-bold text-xs tracking-wider">
                    Select Plan
                  </p>
                </div>
              </div>
              <div className="items-center gap-5 flex step text-white">
                <div
                  className={`border-solid border-2 px-3 py-1.5 rounded-full text-sm font-bold num ${
                    active === 3 ? "active" : ""
                  }`}
                >
                  3
                </div>
                <div className="flex flex-col step-text-div">
                  <p className="mobile:hidden uppercase step-no text-gray-400 text-xs">
                    step 3
                  </p>
                  <p className="mobile:hidden lg:text-sm uppercase step-info font-bold text-xs tracking-wider">
                    ADD-ONS
                  </p>
                </div>
              </div>
              <div className="items-center gap-5 flex step text-white">
                <div
                  className={`border-solid border-2 px-3 py-1.5 rounded-full text-sm font-bold num ${
                    active === 4 ? "active" : ""
                  }`}
                >
                  4
                </div>
                <div className="flex flex-col step-text-div">
                  <p className="mobile:hidden uppercase step-no text-gray-400 text-xs">
                    step 4
                  </p>
                  <p className="mobile:hidden lg:text-sm uppercase step-info font-bold text-xs tracking-wider">
                    SUMMARY
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* START OF TEXT DIV */}
          <div className="w-[552px] mobile:w-full text-div">
            <div className="h-full px-10 py-10 flex flex-col justify-between steps-container container">
              {sent ? (
                <div className="justify-center items-center h-full gap-6 flex flex-col step-form step-5">
                  <img className="w-16" src={Thanks} alt="" />
                  <p className="text-button font-extrabold text-3xl">
                    Thank you!
                  </p>
                  <p className="text-gray-400">
                    Thanks for confirming your subscription! We hope you have
                    fun using our platform. If you ever need support, please
                    feel free to email us at support@loremgaming.com.
                  </p>
                </div>
              ) : active === 1 ? (
                /* STEP 1 */
                <div className="flex flex-col step-form step-1">
                  <h1 className="mb-3 text-4xl font-bold">Personal info</h1>
                  <p className="text-sm text-gray-400">
                    Please provide your name, email address, and phone number.
                  </p>
                  <div className="mt-8 flex flex-col gap-5 step-1-form">
                    <div className="inline-flex flex-col field">
                      <div className="flex justify-between form-text">
                        <label htmlFor="name">Name</label>
                        {nameReq ? (
                          <p className="font-bold required">
                            This field is required
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Stephan King"
                        autoComplete="off"
                        className={`${
                          nameReq ? "required-input " : ""
                        }py-1.5 px-2 border-solid border-2 rounded-lg`}
                        type="text"
                        id="name"
                      />
                    </div>
                    <div className="inline-flex flex-col field">
                      <div className="flex justify-between form-text">
                        <label htmlFor="email">Email Address</label>
                        {emailReq ? (
                          <p className="required">This field is required</p>
                        ) : (
                          ""
                        )}
                      </div>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. stephanking@lorem.com"
                        autoComplete="off"
                        className={`${
                          emailReq ? "required-input " : ""
                        }py-1.5 px-2 border-solid border-2 rounded-lg`}
                        type="email"
                        id="email"
                      />
                    </div>
                    <div className="inline-flex flex-col field">
                      <div className="flex justify-between form-text">
                        <label htmlFor="phone">Phone Number</label>
                        {phoneReq ? (
                          <p className="required">This field is required</p>
                        ) : (
                          ""
                        )}
                      </div>
                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +1 234 567 890"
                        autoComplete="off"
                        className={`${
                          phoneReq ? "required-input " : ""
                        }py-1.5 px-2 border-solid border-2 rounded-lg`}
                        type="tel"
                        id="phone"
                      />
                    </div>
                  </div>
                </div>
              ) : active === 2 ? (
                /* !!!!!!!!!! STEP 2 !!!!!!!!!!! */
                <div className="flex flex-col step-form step-2">
                  <h1 className="mb-3 text-4xl font-bold">Select Your Plan</h1>
                  <p className="text-sm text-gray-400">
                    You have the option of monthly or yearly billing.
                  </p>
                  <div className="mobile:flex-col flex mt-5 gap-5 plans">
                    <div
                      onClick={() => setActivePlan(0)}
                      className={`mobile:flex-row mobile:h-auto border-solid border-2 rounded-md flex flex-col justify-between p-4 h-[10em] min-w-[9em] plan cursor-pointer ${
                        activePlan === 0 ? "active-plan" : ""
                      }`}
                    >
                      <img src={Arcade} className="h-max mr-auto" alt="" />
                      <div className="plan-text">
                        <p className="plan-name text-black font-extrabold">
                          Arcade
                        </p>
                        <p className="plan-price text-gray-400">
                          {!myswitch
                            ? planPrices[0].monthly
                            : planPrices[0].yearly}
                        </p>
                        {myswitch ? (
                          <p className="text-button">2 months free</p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div
                      onClick={() => setActivePlan(1)}
                      className={`mobile:flex-row mobile:h-auto border-solid border-2 rounded-md flex flex-col justify-between p-4 h-[10em] min-w-[9em] plan cursor-pointer ${
                        activePlan === 1 ? "active-plan" : ""
                      }`}
                    >
                      <img src={Advanced} className="h-max mr-auto" alt="" />
                      <div className="plan-text">
                        <p className="plan-name text-black font-extrabold">
                          Advanced
                        </p>
                        <p className="plan-price text-gray-400">
                          {!myswitch
                            ? planPrices[1].monthly
                            : planPrices[1].yearly}
                        </p>
                        {myswitch ? (
                          <p className="text-button">2 months free</p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div
                      onClick={() => setActivePlan(2)}
                      className={`mobile:flex-row mobile:h-auto border-solid border-2 rounded-md flex flex-col justify-between p-4 h-[10em] min-w-[9em] plan cursor-pointer ${
                        activePlan === 2 ? "active-plan" : ""
                      }`}
                    >
                      <img src={Pro} className="h-max mr-auto" alt="" />
                      <div className="plan-text">
                        <p className="plan-name text-black font-extrabold">
                          Pro
                        </p>
                        <p className="plan-price text-gray-400">
                          {!myswitch
                            ? planPrices[2].monthly
                            : planPrices[2].yearly}
                        </p>
                        {myswitch ? (
                          <p className="text-button">2 months free</p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="gap-3 rounded-sm py-2 mt-4 flex justify-center bg-gray-100 my-div">
                    <p className={!myswitch ? "text-button" : "text-gray-400"}>
                      Monthly
                    </p>
                    <div
                      onClick={() => setmySwitch(!myswitch)}
                      className="bg-button flex p-1 rounded-full w-10 h-6 cursor-pointer"
                    >
                      <div
                        className={` bg-white rounded-full w-4 h-full switch ${
                          myswitch ? "ml-auto" : ""
                        }`}
                      ></div>
                    </div>
                    <p className={myswitch ? "text-button" : "text-gray-400"}>
                      Yearly
                    </p>
                  </div>
                </div>
              ) : active === 3 ? (
                /* !!!!!!!!!!!!!!STEP 3 !!!!!!!!!!!! */
                <div className="flex flex-col step-form step-3">
                  <h1 className="mb-3 text-4xl font-bold">Pick add-ons</h1>
                  <p className="text-sm text-gray-400">
                    Add-ons help enhance your gaming experience.
                  </p>
                  <div className="flex flex-col gap-5 mt-4 add-ons">
                    <div
                      onClick={() => handleAddAddOns(0)}
                      className={`${
                        activeAddOns.includes(0) ? "active-add-on" : ""
                      } rder-solid border-2 rounded-md py-3 px-4 flex items-center justify-between add-on`}
                    >
                      <div className="mr-5 w-5 h-5 border-solid border-2 cursor-pointer rounded-md tick"></div>
                      <div className="mr-auto flex flex-col add-on-text">
                        <p className="text-button font-bold add-on-name">
                          Online service
                        </p>
                        <p className="text-gray-400 text-sm add-on-desc">
                          Access to multiplayer games
                        </p>
                      </div>
                      <p className="text-text text-sm add-on-price">
                        +
                        {!myswitch
                          ? addOnPrices[0].monthly
                          : addOnPrices[0].yearly}
                      </p>
                    </div>

                    <div
                      onClick={() => handleAddAddOns(1)}
                      className={`${
                        activeAddOns.includes(1) ? "active-add-on" : ""
                      } border-solid border-2 rounded-md py-3 px-4 flex items-center justify-between add-on`}
                    >
                      <div className="mr-5 w-5 h-5 border-solid border-2 cursor-pointer rounded-md tick"></div>
                      <div className="mr-auto flex flex-col add-on-text">
                        <p className="text-button font-bold add-on-name">
                          Larger storage
                        </p>
                        <p className="text-gray-400 text-sm add-on-desc">
                          Extra 1TB of cloud save
                        </p>
                      </div>
                      <p className="text-text text-sm add-on-price">
                        +
                        {!myswitch
                          ? addOnPrices[1].monthly
                          : addOnPrices[1].yearly}
                      </p>
                    </div>
                    <div
                      onClick={() => handleAddAddOns(2)}
                      className={`${
                        activeAddOns.includes(2) ? "active-add-on" : ""
                      } border-solid border-2 rounded-md py-3 px-4 flex items-center justify-between add-on`}
                    >
                      <div className="mr-5 w-5 h-5 border-solid border-2 cursor-pointer rounded-md tick"></div>
                      <div className="mr-auto flex flex-col add-on-text">
                        <p className="text-button font-bold add-on-name">
                          Customizable profile
                        </p>
                        <p className="text-gray-400 text-sm add-on-desc">
                          Custom theme on your profile
                        </p>
                      </div>
                      <p className="text-text text-sm add-on-price">
                        +
                        {!myswitch
                          ? addOnPrices[2].monthly
                          : addOnPrices[2].yearly}
                      </p>
                    </div>
                  </div>
                </div>
              ) : active === 4 ? (
                <div className="flex flex-col step-form step-4">
                  <h1 className="mb-3 text-4xl font-bold">Finishing up</h1>
                  <p className="text-sm text-gray-400">
                    Double-check everything looks OK before confirming.
                  </p>
                  <div className="flex flex-col p-4 mt-3 rounded-lg summary">
                    <div className="border-b-2 flex items-center justify-between pb-4 summary-plan">
                      <div className="flex flex-col summary-plan-text">
                        <p className="text-button font-extrabold summary-plan-name">{`${
                          plans[activePlan]
                        } (${myswitch ? "Yearly" : "Monthly"})`}</p>
                        <p
                          onClick={() => setActive(2)}
                          className="text-gray-400 cursor-pointer w-min underline "
                        >
                          Change
                        </p>
                      </div>
                      <p className="text-button font-extrabold summary-plan-price">
                        {myswitch
                          ? planPrices[activePlan].yearly
                          : planPrices[activePlan].monthly}
                      </p>
                    </div>
                    <div className="mt-2 flex flex-col gap-2 summary-addons">
                      {activeAddOns.map((active) => {
                        return (
                          <div className="flex justify-between summary-add-on">
                            <p className="text-gray-400 s-add-on-name">
                              {addOns[active]}
                            </p>
                            <p className="text-gray-400 s-add-on-price">
                              +
                              {myswitch
                                ? addOnPrices[active].yearly
                                : addOnPrices[active].monthly}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex justify-between px-4 py-2 total-summary">
                    <p className="text-gray-400">{`Total (per ${
                      myswitch ? "year" : "month"
                    })`}</p>
                    <p className="text-text font-bold">{total}</p>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="mt-3 flex justify-between items-center btns-div">
                {active !== 1 && !sent ? (
                  <div
                    onClick={() => setActive(active - 1)}
                    className="cursor-pointer text-gray-400 hover:text-button font-bold back-btn"
                  >
                    Go Back
                  </div>
                ) : (
                  ""
                )}
                {!sent ? (
                  <button
                    onClick={() => handleNextStep()}
                    className={`${
                      active === 4 ? "bg-text" : "bg-button"
                    } rounded-md ml-auto px-3 py-1.5 text-white`}
                  >
                    {active === 4 ? "Confirm" : "Next Step"}
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
