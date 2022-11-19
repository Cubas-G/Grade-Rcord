import React, { useState, useEffect } from 'react'
import {
  View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, LogBox, Button,
} from 'react-native';

const Notes = () => {

  const [NF, setNF] = useState<number>()
  const [text, setText] = useState<string>('')
  const [firstParcial, setFirstParcial] = useState<string>('')
  const [secondParcial, setSecondParcial] = useState<string>('')


  //Arreglo estudiantes
  const [estudiante, setEstudiante] = useState<string[]>([])
  //nota final
  const [total, setTotal] = useState<string[]>([])

  const handleAddStudents = () => {
    const text2: string[] = [text]
    const allText: string[] = [...estudiante, ...text2]

    setEstudiante(allText)
  }
  const handleAddNotes = () => {
    const parcials = (parseFloat(firstParcial) + parseFloat(secondParcial)) / 2
    setNF(parcials)
    const ArrTotal: string[] = [parcials.toString()]
    const allTotal: string[] = [...total, ...ArrTotal]
    setTotal(allTotal)
  }

  const handleExecute = () => {
    handleAddStudents()
    handleAddNotes()
  }

  //useEffect(() => {}, [firstParcial, setSecondParcial, NF])

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.appText}>Nombre del Estudiante</Text>
        <TextInput
          style={styles.input}
          placeholder='Nombre del Estudiante'
          onChangeText={text => setText(text)}
        />
        <View style={styles.ventana}>
          <View style={styles.parciales}>
            <View>
              <Text style={styles.appText}>IP</Text>
              <TextInput
                style={styles.inputPaciales}
                placeholder='IP'
                onChangeText={firstParcial => setFirstParcial(firstParcial)}
              />
            </View>
            <View>
              <Text style={styles.appText}>IIP</Text>
              <TextInput
                style={styles.inputPaciales}
                placeholder='IIP'
                onChangeText={secondParcial => setSecondParcial(secondParcial)}
              />
            </View>
            <View>
              <Text style={styles.appText}>NF</Text>
              <Text style={styles.inputPaciales}>{NF}</Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleExecute()}
              >
                <Text style={styles.appText}> Agregar </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.listaSection}>
          <Text style={styles.appText}>Lista de estudiantes registrados</Text>
          <View>
            <Text style={styles.nombres}>Nombres</Text>
            <View>
              <Text style={styles.notas}>Notas</Text>
            </View>
          </View>
          {
            estudiante.map((estudent, index) => (
              <View style={styles.lista}>
                <Text>{(index + 1)}</Text>
                <Text key={index} style={styles.appText}>{estudent}</Text>
                <Text
                  style={[
                    total[index] < '60' ? styles.textReprobed : styles.textAprobado,
                  ]}
                >
                  Nota final: {total[index]}
                </Text>
              </View>
            ))
          }
        </View>
      </View>
    </ScrollView>
  )
}

export default Notes

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flex: 1,
  },
  input: {
    marginTop: 10,
    borderWidth: 2,
    paddingVertical: 18,
    paddingHorizontal: 13,
    paddingStart: 10,
    borderRadius: 6,
    borderColor: '#22B5A3',
  },
  parciales: {
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputPaciales: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#607D8B',
    textAlign: 'center',
    paddingVertical: 15,
    borderRadius: 11,
    
  },
  button: {
    borderWidth: 2,
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginTop: 30,
    justifyContent: 'center',
    borderColor: '#ABB8C3',
    backgroundColor: '#ABB8C3',
  },
  listaSection: {
    paddingHorizontal: 7,
    marginTop: 30,
    justifyContent: 'space-between',
    paddingVertical: 27,
    borderRadius: 6,
    borderColor: '#0275d8'
  },
  lista: {
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#0275d8',
    backgroundColor: '#f2f3f4',
    paddingVertical: 20,
    paddingHorizontal: 7,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  textAprobado: {
    color: '#0275d8',
  },
  textReprobed: {
    color: 'red',
  },
  appText: {
    color: '#0275d8',
    fontSize: 23,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  nombres: {
    textAlign: 'center',
    fontSize: 20,
    color: 'green',
    paddingRight: 100
  },
  notas: {
    textAlign: 'right',
    fontSize: 20,
    color: 'green',
    marginTop: -27,
    paddingRight: 35,
  },
  ventana: {
    marginTop: 10,
    borderWidth: 2,
    paddingVertical: 18,
    paddingHorizontal: 13,
    paddingStart: 10,
    borderRadius: 6,
    borderColor: '#22B5A3',
  },

})