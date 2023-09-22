import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do List</Text>
      <Image source={require("./assets/todo.jpeg")} style={styles.image} />

      {tasks.map((task, index) => (
        <View key={index} style={styles.taskContainer}>
          <TouchableOpacity onPress={() => removeTask(index)}>
            <Image source={require("./assets/icons8-tick-50.png")} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.task}>{task}</Text>
          <TouchableOpacity onPress={() => removeTask(index)}>
            <Image source={require("./assets/icons8-round-50.png")} style={styles.icon} />
          </TouchableOpacity>
        </View>
      ))}

      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Type task here'
          style={styles.input}
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
        />
        <TouchableOpacity onPress={addTask}>
          <Text style={styles.addButton}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTasks([])}>
          <Text style={styles.removeButton}>-</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 34,
    marginTop: '2%',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 20,
  },
  taskContainer: {
    backgroundColor: 'gray',
    padding: 20,
    width: '93%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 15,
  },
  task: {
    color: '#FFFFFF',
  },
  icon: {
    width: 20,
    height: 20,
  },
  inputContainer: {
    marginBottom: 20,
    width: '93%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  input: {
    height: 60,
    margin: 0,
    width: '60%',
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: 'gray',
  },
  addButton: {
    fontSize: 24,
    width: 50,
    height: 50,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderRadius: 50,
    backgroundColor: 'gray',
  },
  removeButton: {
    fontSize: 24,
    width: 50,
    height: 50,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderRadius: 50,
    backgroundColor: 'gray',
  },
});
