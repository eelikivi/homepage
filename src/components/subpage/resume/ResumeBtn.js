import React, { Component } from 'react'

export default function ResumeBtn(props) {
	return(
		<a className="btn btn-primary" href={props.href} target="_blank" rel="noreferrer noopener">{props.text}</a>
	)
}