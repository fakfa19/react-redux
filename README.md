# React Redux
ตัวอย่างการใช้ Redux ในการจัดการ state ในโปรเจค React

## Redux คืออะไร
Redux เป็นไลบรารีสำหรับจัดการ state (state management)

##### 3 Principles ของ Redux
1. **Single source of truth**: State ของทั้งแอปพลิเคชันจะถูกเก็บไว้ใน object เดียวกัน ที่เรียกว่า **store** ซึ่งเป็น state tree

2. **State is read-only**: ไม่สามารถแก้ไข state โดยตรงได้ การเปลี่ยนแปลง state จะต้องผ่าน actions ที่ส่งเข้าไปยัง reducers เพื่ออัปเดต state

3. **Changes are made with pure functions**: Reducer เป็นเพียง pure functions ที่รับ   `previous state` และ `action` แล้ว return `next state` ใน Reducer เราสามารถเปลี่ยน state ได้ โดยการ return `new state` ไม่ใช่การแก้ไข state เดิม (`mutating the previous state`)

##### Redux มีหลักการทำงานดังนี้:
1. **Store**: เก็บ state ของแอปพลิเคชันทั้งหมดอยู่ในที่เดียวกัน ซึ่งเป็น state tree ที่ไม่สามารถเปลี่ยนแปลงได้โดยตรงจากภายนอก
2. **Actions**: หน้าที่ของ Action คือ เป็นตัวบอกว่าข้อมูลนั้นคืออะไร จะทําอะไรกับมัน
3. **Reducers**: รับ Actions และแปลง state ของแอปพลิเคชันใน Store ตาม Actions ที่ถูกเรียก
4. **Dispatch**: เป็นการส่ง Actions ไปยัง Reducers เพื่อทำการเปลี่ยนแปลง state ของ Store

เมื่อ Actions ถูกส่งไปยัง Reducers แล้ว จะเกิดการอัปเดต stateใน Store และนำ state ใหม่นี้ไปแสดงผลในส่วนต่าง ๆ ของแอปพลิเคชัน

### Installation
1. Clone the repository:
```bash
git clone https://github.com/fakfa19/react-redux.git
```
2. Install dependencies:
```bash
cd react-redux
npm install
```
### Usage
To start the development server, run:

```bash
npm start
```
This will start the application in development mode. Open http://localhost:3000 to view it in the browser.

### Folder Structure
```lua
src/
|-- actions/
|   |-- couterAction.js
|   |-- index.js
|-- reducers/
|   |-- counterReducer.js
|   |-- index.js
|-- store/
|   |-- index.js
|-- App.js
|-- index.js
```