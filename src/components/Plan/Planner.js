import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal";

const Planner = () => {
  const [plans, setPlans] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [newPlanData, setNewPlanData] = useState({
    category: "",
    startDate: "",
    endDate: "",
    totalAmount: "",
    amountUsed: "",
  });

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/planner/plans/"
        );
        setPlans(response.data);
      } catch (error) {
        console.error("Error fetching plans:", error);
      }
    };

    fetchPlans();
  }, []);

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleNewPlanChange = (e) => {
    const { name, value } = e.target;
    setNewPlanData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const openCreateModal = () => {
    setCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setCreateModalOpen(false);
  };

  const handleNewPlanSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/planner/plans/",
        newPlanData
      );
      const createdPlan = response.data;
      setPlans((prevPlans) => [...prevPlans, createdPlan]);
      setCreateModalOpen(false);
    } catch (error) {
      console.error("Error creating new plan:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mt-8 mb-4 sm:text-5xl md:text-6xl">
        Financial Plans
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <div
            key={plan.planId}
            onClick={() => handlePlanClick(plan)}
            className="bg-white border border-gray-200 rounded-lg shadow p-4 cursor-pointer transition duration-300 hover:bg-gray-100"
          >
            <h2 className="text-xl font-semibold mb-2">
              Plan ID: {plan.planId}
            </h2>
            <p className="mb-1">Category: {plan.category}</p>
            <p className="mb-1">Total Amount: {plan.amountTotal}</p>
            <p className="text-xs text-gray-500">
              Created At: {plan.createdAt}
            </p>
          </div>
        ))}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mt-4"
        onClick={openCreateModal}
      >
        Create
      </button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          {selectedPlan && (
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                Plan ID: {selectedPlan.planId}
              </h2>
              <p className="mb-1">Category: {selectedPlan.category}</p>
              <p className="mb-1">Start Date: {selectedPlan.startDate}</p>
              <p className="mb-1">End Date: {selectedPlan.endDate}</p>
              <p className="mb-1">Total Amount: {selectedPlan.amountTotal}</p>
              <p className="mb-1">Used Amount: {selectedPlan.amountUsed}</p>
              <p className="text-xs text-gray-500">
                Created At: {selectedPlan.createdAt}
              </p>
            </div>
          )}
        </Modal>
      )}
      {isCreateModalOpen && (
        <Modal onClose={closeCreateModal}>
          <form onSubmit={handleNewPlanSubmit}>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Create New Plan</h2>
              <div className="mb-4">
                <label htmlFor="category" className="block mb-1">
                  Category:
                </label>
                <select
                  id="category"
                  name="category"
                  value={newPlanData.category}
                  onChange={handleNewPlanChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-4"
                >
                  <option value="">Select a category</option>
                  <option value="FNB">FNB</option>
                  <option value="TRANSPORTATION">TRANSPORTATION</option>
                  <option value="HOUSEHOLD_NEEDS">HOUSEHOLD_NEEDS</option>
                  <option value="SHOPPING">SHOPPING</option>
                  <option value="HEALTH">HEALTH</option>
                  <option value="TRAVEL">TRAVEL</option>
                  <option value="ENTERTAINMENT">ENTERTAINMENT</option>
                  <option value="EDUCATION">EDUCATION</option>
                  <option value="DONATIONS">DONATIONS</option>
                  <option value="INVESTMENTS">INVESTMENTS</option>
                  <option value="OTHERS">OTHERS</option>
                  <option value="NONE">NONE</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="startDate" className="block mb-1">
                  Start Date:
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={newPlanData.startDate}
                  onChange={handleNewPlanChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-4"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="endDate" className="block mb-1">
                  End Date:
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={newPlanData.endDate}
                  onChange={handleNewPlanChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-4"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="totalAmount" className="block mb-1">
                  Total Amount:
                </label>
                <input
                  type="number"
                  id="totalAmount"
                  name="totalAmount"
                  value={newPlanData.totalAmount}
                  onChange={handleNewPlanChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-4"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="amountUsed" className="block mb-1">
                  Amount Used:
                </label>
                <input
                  type="number"
                  id="amountUsed"
                  name="amountUsed"
                  value={newPlanData.amountUsed}
                  onChange={handleNewPlanChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-4"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
                >
                  Create
                </button>
              </div>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default Planner;
