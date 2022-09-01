import React from "react"
import { Link, Route, Routes } from "react-router-dom"
import { route } from "./route"


// 生成link
export function generateLinks() {
	return <>
		{route.map(({ path, name }, ind) => {
			return <Link to={path} style={{ padding: 5 }}>
				{name}
			</Link>
		})}
	</>
}

// 生成组件
export function generateRoutes() {
	return <>
		<Routes>
			{route.map(({ path, element, children }, ind) => {
				if (children) {
					return (
						<Route path={path} element={element} key={ind}>
							{children.map(({ path, element }, index) => {
								return <Route path={path} element={element} key={index} />
							})}
						</Route>
					)
				} else {
					return <Route path={path} element={element} key={ind} />
				}
			})}
		</Routes>
	</>
}
