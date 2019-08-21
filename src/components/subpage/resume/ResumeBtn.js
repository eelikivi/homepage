import React, { Component } from 'react'

export default function ResumeBtn(props) {
	return(
		<a href={props.href} target="_blank" rel="noreferrer noopener">{props.text}</a>
	)
}