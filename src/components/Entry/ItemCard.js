import React from 'react'
import { Link } from 'react-router-dom'

const MenuCard = ({ title, description, subPath }) => {
  return (
    <div>
        <Link to={`${subPath}`}
            className="w-24 md:w-72 h-18 md:h-36 block max-w-sm md:max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
                {description}
            </p>
        </Link>
    </div>
  )
}

export default MenuCard