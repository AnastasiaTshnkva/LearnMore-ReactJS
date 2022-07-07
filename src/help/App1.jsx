// import React from 'react';
// import AppBody from "./AppBody.jsx";
// import CreateMemoryCard from "./CreateMemoryCard.jsx";
//
//
// class App1 extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             header: 'Header 1',
//             footersDiv: [],
//         }
//     }
//
//     setAnotherHeader(string) {
//         this.setState((state) => {return ({header: state.header + string})}, () => {
//             console.log('new state is', this.state.header);
//         })
//     }
//
//     createFooter() {
//         this.setState((state) => {return({footersDiv: [1,2,3]})}, () => {
//             console.log('footer is', this.state.footersDiv);
//         })
//     }
//
//     render() {
//         console.log('render me!');
//
//         return (
//             <div className={"app"}>
//                 <div className={"header"}>
//                     {this.state.header}
//                 </div>
//                 <div className={"body"}>
//                     <AppBody setAnotherHeader={this.setAnotherHeader.bind(this)} createFooter={this.createFooter.bind(this)}/>
//
//                     {/*{LessonCard.map((cardData) => {<LessonCard name={cardData.name}/>})}*/}
//                 </div>
//                 <div className={"footer"}>
//                     {this.state.footersDiv.map((divText, index) => {
//                         return(
//                             <div key={index}>
//                                 {divText}
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//             )
//     }
// }
// export default App1;