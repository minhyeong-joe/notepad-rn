import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, AsyncStorage } from 'react-native';

import { Header, Body, Section, InputField, MyButton, ToggleTab, XIcon, TextArea, Footer } from './reusable';

export default class NotePad extends Component {
  constructor(props){
    super(props);
    this.state={
      titleInput: '',
      contentInput: '',
      note: [],
    };
  }

  // componentDidMount() {
  //   AsyncStorage.getItem("myNote")
  //   .then(myNote => {
  //     let noteJSON = JSON.parse(myNote);
  //     this.setState({
  //       note: noteJSON
  //     });
  //   })
  //   .catch(error => alert(error))
  // }

  componentDidUpdate() {
    let noteList = JSON.stringify(this.state.note);
    AsyncStorage.setItem("myNote", noteList);
  }

  componentDidMount() {
    AsyncStorage.getItem("myNote")
    .then (myNote => {
      let noteJSON = JSON.parse(myNote);
      if (noteJSON != null) {
        this.setState({note: noteJSON});
      }
    })
    .catch(error => console.log(error))
  }

  addNote() {
    if(this.state.titleInput != '' && this.state.contentInput != '') {
      this.setState({
        titleInput: '',
        contentInput: '',
        note: [...this.state.note, {title: this.state.titleInput, content: this.state.contentInput, id: Date.now()}]
      });
    };
  }

  deleteNote(id) {
    const noteList = this.state.note.filter((item) => {
      return item.id != id;
    });
    this.setState({note: noteList});
  };

  deleteAll() {
    this.setState({
      note: []
    });
  }

  render() {
    return (
      <View style={{flex:1}}>
        <ScrollView keyboardDismissMode='on-drag' keyboardShouldPersistTaps="always" style={{flex: 1}}>
          <Header>Notepad</Header>
          <Body>
            <Section>
              <InputField
                label='Note Title: '
                placeholder='note title'
                onChangeText={text => this.setState({titleInput: text})}
                value={this.state.titleInput}
                maxLength={30}
              />
            </Section>
            <Section>
              <TextArea
                label='Content: '
                placeholder='content'
                onChangeText={text => this.setState({contentInput: text})}
                value={this.state.contentInput}
                returnNewLine
              />
            </Section>
            <Section>
              <MyButton action={this.addNote.bind(this)}>Add Note</MyButton>
              <MyButton action={this.deleteAll.bind(this)}>Delete All Entries</MyButton>
            </Section>
          </Body>
          {this.state.note.map(note => {
            return(
              <Body key={note.id}>
                <ToggleTab title={note.title} content={note.content} />
                <XIcon action={this.deleteNote.bind(this, note.id)}/>
              </Body>
            );
          })}
        </ScrollView>
        <Footer/>
      </View>
    );
  }
};
