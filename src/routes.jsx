import { Navigate, createBrowserRouter, createHashRouter } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Destination from "./pages/DestinationPage/Destination";
import Crew from "./pages/CrewPage/Crew";
import Error from "./pages/Error";
import Technology from "./pages/TechnologyPage/Technology";
import data from "./data";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";

const destinationChildren = ['moon', 'mars', 'europa', 'titan'].map((item, index) => {
    return {
        key: index,
        index: item==='moon' ? true : false,
        path: `/destination/${item}`,
        element: (
            <Destination
                destinaData={data.destinations.find(
                    (desDataItem) => desDataItem.name.toLowerCase() === item
                )}
            />
        )
    }
})
const crewChildren = ['commander', 'flight-engineer', 'mission-specialist', 'pilot'].map((item, index) => {
    return {
        key: index,
        path: `/crew/${item}`,
        element: (
            <Crew
                crewData={data.crew.find((crewDataItem) => 
                    crewDataItem.role.toLowerCase().replace(/ /g, '-') === item
                )}
            />
        )
    }
})
const technologyChildren = ['launch-vehicle', 'spaceport', 'space-capsule'].map((item, index) => {
    return {
        key: index,
        path: `/technology/${item}`,
        element: (
            <Technology
                techData={data.technology.find((techDataItem) => 
                    techDataItem.name.toLowerCase().replace(/ /g, '-') === item
                )}
            />
        )
    }
})

// const router = createBrowserRouter([
const router = createHashRouter([
	{
		path: "/",
		element: (<Home />),
		errorElement: <Error />,
	},
	{
		path: "/destination",
		element: <DefaultLayout backgroundImg="destination" slogan='01 Pick your destination'/>,
		children: [
            { 
                index: true, 
                element: <Navigate to="/destination/moon" replace /> 
            },
            ...destinationChildren
		],
	},
	{
		path: "/crew",
		element: <DefaultLayout backgroundImg='crew' slogan='02 MEET YOUR CREW'/>,
        children: [
            { 
                index: true, 
                element: <Navigate to="/crew/commander" replace /> 
            },
            ...crewChildren
        ]
	},
	{
		path: "/technology",
        element: <DefaultLayout backgroundImg='technology' slogan='03 SPACE LAUNCH 101'/>,
        children: [
            { 
                index: true, 
                element: <Navigate to="/technology/launch-vehicle" replace /> 
            },
            ...technologyChildren
        ]
	},
]);

export default router;
