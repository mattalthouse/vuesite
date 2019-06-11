<template>
<div class="parallax">
    <div id="Table">
        <app-header v-bind:title="appTitle" v-bind:subtitle="subtitle"></app-header>
        <!--<button v-on:click="sortByValue('Name')">Sort by Name</button>
    <button v-on:click="sortByValue('Occupation')">Sort by Occupation</button>
    <button v-on:click="sortByValue('HireDate')">Sort by Hire Date</button>-->
        <!--<p>
        Json Source:
        <input v-model="jsonSource" placeholder="Json Source" />
        <button v-on:click="getJsonData()">Update</button>
    </p>-->
        <button class="btn-table2" v-on:click="openModalAddCell()">Add New Entry</button>
        <span>
            <input v-model="searchTerm" v-on:change="searchTable()" placeholder="Search"/>
            <button class="btn-table2" v-on:click="clearSearch()">Clear</button>
        </span>


        <app-modal v-if="showModalAddCell || showModalEditCell">
            <div slot="body" v-if="showModalEditCell">
                <h3 slot="header">Edit Cell:</h3>
                <input size="25" v-model="editData" placeholder="Enter Data Here" />
                <span slot="footer">
                    <button style="margin-right:20px;" v-on:click="closeModal()">Close</button>
                    <button v-on:click="editCell()">Save</button>
                </span>
            </div>
            <div slot="body" v-if="showModalAddCell">
                <h3 slot="header">New Cell:</h3>
                <!--<span>
                <input v-model="newName" placeholder="New Name" />
                <input v-model="newOcc" placeholder="New Occupation" />
                <input v-model="newHD" placeholder="New Hire Date" />
            </span>-->
                <span v-for="col in columnList">
                    {{col}}
                    <input size="25" v-model="newColEditData[col]" />
                    <br /> <br />
                </span>
                <span slot="footer">
                    <button style="margin-right:20px;" v-on:click="closeModal()">Close</button>
                    <button v-on:click="addCell()">Add New Entry</button>
                </span>
            </div>


        </app-modal>

        <table slot="app-cell">
            <thead>
            <th v-for="(cell, index) in columnList">
                <i class="fa fa-caret-left fa-sm" v-if="index != 0" v-on:click="moveColLeft(cell)"></i>
                {{cell}}
                <i class="fa fa-caret-right fa-sm" v-if="index < columnList.length - 1" v-on:click="moveColRight(cell)"></i>
                <i class="fa fa-sort fa-sm" style="float:right; margin-left:10px; " v-on:click="sortByValue(cell)"> Sort</i>
            </th>
            </thead>

            <tr v-for="(uID, index) in uniqueIDs" v-if="index >= rowsPerPageLower && index < rowsPerPageUpper">
                <td v-for="cell in TableCell" v-on:click="openModalEdit(cell)" v-if="cell.searchInclude && cell.objID === uID">

                    <app-cell v-bind:value="cell.value"
                              :column="cell.column"
                              :header="cell.header"
                              :objID="cell.objID"
                              :colID="cell.colID"
                              :hoverActive="cell.hoverActive"
                              :searchInclude="cell.searchInclude">
                    </app-cell>
                    <!--<i class="fa fa-pencil-square-o fa-sm" v-show="cell.hoverActive" v-if="cell.isEditable" style="background-color:inherit;"></i>-->
                    <span class="edit"><i class="fa fa-pencil-square-o fa-sm" v-if="cell.isEditable" style="background-color:inherit; color:crimson; box-shadow:none;" ></i></span>
                </td>
            </tr>
        </table>
        <br />
        <button class="fa fa-fast-backward fa-xs" v-on:click="firstPage()"></button>
        <button v-for="page in numPages" v-if="page > currentPage - 5 && page < currentPage" v-on:click="jumptoPage(page)">{{page}}</button>
        <i>{{currentPage}}</i>
        <button v-for="page in numPages" v-if="page < currentPage + 5 && page > currentPage" v-on:click="jumptoPage(page)">{{page}}</button>
        <button class="fa fa-fast-forward fa-xs" v-on:click="lastPage()"></button>
        <br /> <br />
        <label for="numrowsDropdown">Rows Per Page:</label>
        <select id="numrowsDropdown" v-model="numofRows" v-on:change="jumptoPage(currentPage)">
            <option>10</option>
            <option>20</option>
            <option>50</option>
        </select>
        <br />
        <!--<span>{{currentPage}}</span>-->
    </div>
</div>
</template>

<script>
    //require('./assets/tablestyle.css')
    //require('./assets/Main.css')
    import TableCell from './components/TableCell.vue';
    import Header from './components/Header.vue';
    import Modal from './components/Modal.vue';
import { debug, isUndefined } from 'util';

    export default {
        components: {
            'app-header': Header,
            'app-cell': TableCell,
            'app-modal': Modal,
        },
        name: 'Table',
        props: ['appTitle', 'jsonSource'],
        data: function () {
            return {
                TableCell: [
                
                    /*{ column: 'Name', value: 'Name', header: true, objID: 0, colID: 0 },
                    { column: 'Occupation', value: 'Occupation', header: true, objID: 0, colID: 1 },
                    { column: 'Hire Date', value: 'Hire Date', header: true, objID: 0, colID: 2 },*/
                    

                ],
                selectedCell: [{}],
                selectedColCheck: [],
                searchTerm: "",
                title: "Test Vue Table",
                subtitle: "asdf",
                Column1: "Name",
                Column2: "Occupation",
                Column3: "HireDate",
                keysList: [],
                columnList: [],
                uniqueIDs: [],
                colOrder: [],
                newColEditData: [],
                includedSearchCells: [],
                includedSearchRows: [],
                numofRows: 20,
                rowsPerPageLower: 0,
                rowsPerPageUpper: 20,
                currentPage: 1,
                //sortedName: false,
                //sortedOcc: false,
                //sortedHD: false,
                sortedTable: true,
                showModal: false,
                showModalAddCell: false,
                showModalEditCell: false,
                editData: "",
                //jsonSource: "https://api.myjson.com/bins/yqih2", //faked some data with https://mockaroo.com/schemas/new
                //jsonSource: "https://api.myjson.com/bins/t5x0u",
                //jsonSource: "https://api.myjson.com/bins/13069s"
                //jsonSource: "https://api.myjson.com/bins/rridc"
                //jsonSource:"https://api.myjson.com/bins/11yh0o"
                //jsonSource: "https://api.myjson.com/bins/9qqns"
                //jsonSource:"https://api.myjson.com/bins/16hkxk"
                //jsonSource:"https://api.myjson.com/bins/108bd4"
                //jsonSource:"https://api.myjson.com/bins/137p3s"
                editApiPath: "",



            }
        },
        created() {
            this.getJsonData();
        },
        mounted: function () {

            //this.populateTableCells();
            //this.popObjIDs();
            //this.getUniqueIDs();
            //this.getNumRows();
        },
        computed: {
            numPages: function () {
                var validcells = this.uniqueIDs;

                var pages = validcells.length / this.numofRows;
                //console.log("uids: " + this.includedSearchRows.length + " numrows: " + this.numofRows + " pages: " + this.includedSearchRows.length / this.numofRows);
                return Math.ceil(pages);
            },


        },
        methods: {
            getJsonData: function () {
                console.log("getting json data");
                fetch(this.jsonSource).then(response => {
                    return response.json();
                }).then(data => {


                    this.populateTableCells(data);
                    this.getUniqueIDs();
                    

                }).catch(err => {
                    console.log("json error! " + err);
                    });


            },
            submitData: function (path, data) {
                this.$http.post(path, data).then(function (data) {
                    console.log(data)
                });
            },
            getNumRows: function () {
                if (this.uniqueIDs.length <= this.numofRows) {
                    this.numofRows = this.uniqueIDs.length;
                    this.rowsPerPageUpper = this.uniqueIDs.length;
                }

            },
            populateTableCells: function (data) {
                //for (var i = 0; i < data.length; i++) {
                //    this.TableCell.push({ "column": "Name", "value": data[i]['Name'], "header": false, "objID": i + 1, "colID": 0 })
                //    this.TableCell.push({ "column": "Occupation", "value": data[i]['Occupation'], "header": false, "objID": i + 1, "colID": 1 })
                //    this.TableCell.push({ "column": "Hire Date", "value": data[i]['Hire Date'], "header": false, "objID": i + 1, "colID": 2 })
                //}

                if (data[0] != undefined) {
                    for (var key in data[0]) {
                        var nameTest = data[0][key]['name'];
                        if (nameTest != undefined)
                            this.columnList.push(nameTest);
                        else
                            this.columnList.push(key);

                        this.keysList.push(key);
                        //this.selectedColCheck.push({ "name": key})
                    }
                }
                else {
                    for (var key in data) {
                        this.keysList.push(key)
                        this.columnList.push(key)
                    }
                }
                    this.keysList.push()
                for (var i = 0; i < this.columnList.length; i++) {
                    this.colOrder.push(i);
                }

                console.log(this.selectedColCheck)
                var keys = this.keysList;
                if (data.length == undefined) {
                    for (var j = 0; j < keys.length; j++) {
                        this.TableCell.push({ "column": keys[j], "value": data[keys[j]], "header": false, "objID": i, "colID": j, searchInclude: true, isEditable: false })
                    }
                }
                else {
                    for (var i = 0; i < data.length; i++) {
                        for (var j = 0; j < keys.length; j++) {
                            var keyval = data[i][keys[j]]['cellValue'];
                            var nameval = data[i][keys[j]]['name'];
                            if (keyval != undefined && nameval != undefined)
                                this.TableCell.push({ "column": nameval, "value": keyval, "header": false, "objID": i, "colID": j, searchInclude: true, isEditable: data[i][keys[j]]['isEditable'] })
                            else
                                this.TableCell.push({ "column": keys[j], "value": data[i][keys[j]], "header": false, "objID": i, "colID": j, searchInclude: true, isEditable: false })

                        }
                    }
                }

                //for (var i = 0; i < this.TableCell.length; i++) {
                //    console.log("tablecell: " + this.TableCell[i].value + " , " + this.TableCell[i].header + " , " + this.TableCell[i].objID)
                //}

                
            },
            moveColLeft: function (cell) {

                var currIndex = this.columnList.indexOf(cell);
                var columnList = this.columnList;
                //console.log(currIndex);

                var tempList = [];
                var tempOrder = [];
                for (var i = 0; i < columnList.length; i++) {
                    if (i === currIndex - 1 && !tempList.includes(columnList[i])) {
                        tempList.push(columnList[currIndex]);
                        tempOrder.push(currIndex);
                    }
                    if (!tempList.includes(columnList[i])) {
                        tempList.push(columnList[i]);
                        tempOrder.push(i);
                    }
                }
                //console.log(tempList);
                //console.log(tempOrder);
                this.columnList = [];
                this.colOrder = [];
                for (var i = 0; i < tempList.length; i++) {
                    this.columnList.push(tempList[i]);
                    this.colOrder.push(tempOrder[i]);
                }
                this.reorderCols();
            },
            moveColRight: function (cell) {
                var currIndex = this.columnList.indexOf(cell);
                var nextIndex = currIndex + 1;
                var columnList = this.columnList;
                //console.log(currIndex);

                var tempList = [];
                var tempOrder = [];
                for (var i = 0; i < columnList.length; i++) {
                    if (i === currIndex && !tempList.includes(columnList[i])) {
                        tempList.push(columnList[nextIndex]);
                        tempList.push(columnList[currIndex]);
                        tempOrder.push(nextIndex);
                        tempOrder.push(currIndex);
                    }
                    else if (!tempList.includes(columnList[i])) {
                        tempList.push(columnList[i]);
                        tempOrder.push(i);
                    }
                }
                //console.log(tempList);
                //console.log(tempOrder);
                this.columnList = [];
                this.colOrder = [];
                for (var i = 0; i < tempList.length; i++) {
                    this.columnList.push(tempList[i]);
                    this.colOrder.push(tempOrder[i]);
                }
                this.reorderCols();
            },
            addCell: function () {

                var self = this;
                var tempIDs = this.uniqueIDs;

                //console.log(this.newColEditData);

                tempIDs.sort(function (a, b) {
                    if (a < b) return -1;
                    if (a > b) return 1;
                    return 0;
                })
               

                for (var i = 0; i < this.columnList.length; i++) {
                    this.TableCell.push({ "column": this.columnList[i], "value": this.newColEditData[this.columnList[i]], "header": false, "objID": tempIDs[tempIDs.length - 1] + 1, "colID": i, searchInclude: true })
                }
                

                //console.log(this.TableCell)
                this.getUniqueIDs();
                this.newColEditData = [];

            },
            getUniqueIDs: function () {
                var self = this;
                var objIDs = [];
                this.TableCell.forEach(function (cell) {
                    //console.log(cell.objID);
                    if (!objIDs.includes(cell.objID)) objIDs.push(cell.objID);
                });
                //console.log("objids:" + objIDs);
                self.uniqueIDs = [];
                objIDs.forEach(function (id) {
                    self.uniqueIDs.push(id);
                })

                //console.log("uniqeids:" + this.uniqueIDs)
            },
            getUniqueIDsCustom: function (table) {
                var self = this;
                var objIDs = [];
                table.forEach(function (cell) {
                    //console.log(cell.objID);
                    if (!objIDs.includes(cell)) objIDs.push(cell);
                });
                //console.log("objids:" + objIDs);
                self.uniqueIDs = [];
                objIDs.forEach(function (id) {
                    self.uniqueIDs.push(id);
                })
            },
            reorgIDs: function (sortedArray) {
                this.uniqueIDs = [];
                for (var i = 0; i < sortedArray.length; i++) {
                    this.uniqueIDs.push(sortedArray[i].objID);
                }
                //console.log(this.uniqueIDs);
                return this.uniqueIDs;
            },
            reorderCols: function () {
                var tcTemp = [];
                for (var col = 0; col < this.colOrder.length; col++) {
                    for (var cell = 0; cell < this.TableCell.length; cell++) {
                        if (this.columnList[col] === this.TableCell[cell].column) {
                            this.TableCell[cell].colID = col;
                            tcTemp.push(this.TableCell[cell]);
                        }
                    }
                }


                this.TableCell = [];
                for (var i = 0; i < tcTemp.length; i++) {
                    this.TableCell.push(tcTemp[i]);
                }

            },
            sortByValue: function (value) {

                //var self = this;
                var tempArray = [];
                for (var i = 0; i < this.TableCell.length; i++) {
                    if (this.TableCell[i]['column'] === value && this.uniqueIDs.includes(this.TableCell[i]['objID'])) {
                        tempArray.push(this.TableCell[i]);
                        //this.TableCell.splice(i, 1);
                    }
                }

                this.sortedTable = !this.sortedTable;

                if (!value.toLowerCase().includes("date")) {
                    tempArray.sort(function (a, b) {
                        //console.log("valtype: " + typeof (a.value));
                        if (typeof (a.value) == "string") {
                            if (a.value.toLowerCase() < b.value.toLowerCase()) { return -1; }
                            if (a.value.toLowerCase() > b.value.toLowerCase()) { return 1; }
                        }
                        else {
                            if (a.value < b.value) { return -1; }
                            if (a.value > b.value) { return 1; }
                        }
                        return 0;
                    });
                }
                else {
                    tempArray.sort((a, b) => {
                        var dateA = new Date(a.value);
                        var dateB = new Date(b.value);
                        //console.log("dateA: " + dateA.toDateString() + " , dateB: " + dateB.toDateString());
                        return (dateB - dateA);
                    })
                }

                if (this.sortedTable) tempArray.reverse();

                this.reorgIDs(tempArray);


            },


            editCell: function () {
                //cell = this.selectedCell[1];
                var editRow = [];
                var editCell = {};
                var editIndex;
                for (var i = 0; i < this.TableCell.length; i++) {
                    if (this.TableCell[i].objID === this.selectedCell[1].objID) {
                        editRow.push(this.TableCell[i])
                        if (this.TableCell[i].colID === this.selectedCell[1].colID) {
                            editCell = this.TableCell[i];
                            editIndex = i;
                        }
                    }
                }

                this.TableCell[editIndex].value = this.editData;
                //var path = "http://localhost:7071/api/UpdateInsurance?data=" + editRow;
                var path = "http://localhost:7071/api/UpdateInsurance";
                this.submitData(path, editRow);

                
                //for (var i = 0; i < this.TableCell.length; i++) {
                //    if (this.TableCell[i].objID === this.selectedCell[1].objID && this.TableCell[i].colID === this.selectedCell[1].colID) {
                //        this.TableCell[i].value = this.editData;
                //        this.editApiPath = "http://localhost:7071/api/UpdateInsurance?facID=10620&rate=" + this.editData;
                //        //debugger;
                //        this.submitData(this.editApiPath/*, { facID: 10620, rate: this.TableCell[i].value }*/)
                //    }
                //}

                this.closeModal();
                this.editData = "";
                this.selectedCell = [{}];

               
            },
            openModalEdit: function (cell) {
                if (cell.isEditable) {
                    this.showModalEditCell = true;
                    this.editData = cell.value;
                    this.selectedCell.push(cell);
                    //console.log(this.showModalEdit)
                    //console.log(cell);
                    //console.log(this.selectedCell[1]);
                }
            },
            openModalAddCell: function () {
                this.showModalAddCell = true;

                for (var i = 0; i < this.columnListlength; i++) {
                    this.newColEditData.push(this.columnList[i]);
                }

            },
            closeModal: function () {
                this.showModalEditCell = false;
                this.showModalAddCell = false;
                this.editData = "";
                this.selectedCell = [{}];
            },
            prevPage: function () {
                this.rowsPerPageUpper -= this.numofRows;
                this.rowsPerPageLower = this.rowsPerPageUpper - this.numofRows;
                this.currentPage--;
            },
            nextPage: function () {
                this.rowsPerPageUpper += this.numofRows;
                this.rowsPerPageLower = this.rowsPerPageUpper - this.numofRows;
                this.currentPage++;
            },
            jumptoPage: function (page) {
                this.rowsPerPageUpper = this.numofRows * page;
                this.rowsPerPageLower = this.rowsPerPageUpper - this.numofRows;
                //console.log(page);
                this.currentPage = page;
            },
            firstPage: function () {
                this.currentPage = 1;
                this.rowsPerPageUpper = this.numofRows * this.currentPage;
                this.rowsPerPageLower = this.rowsPerPageUpper - this.numofRows;
                //return this.currentPage;
            },
            lastPage: function () {
                this.currentPage = this.numPages;
                this.rowsPerPageUpper = this.numofRows * this.currentPage;
                this.rowsPerPageLower = this.rowsPerPageUpper - this.numofRows;
                //return this.currentPage;
            },
            searchTable: function () {
                var includedSearchCells = [];
                var includedSearchRows = [];

                for (var i = 0; i < this.TableCell.length; i++) {
                    if (this.searchTerm.length <= 0)
                        this.TableCell[i].searchInclude = true;
                    if (this.TableCell[i].value.toString().toLowerCase().includes(this.searchTerm.toLowerCase())) {
                        includedSearchCells.push(this.TableCell[i].objID);
                    }
                }

                for (var i = 0; i < this.TableCell.length; i++) {
                    if (includedSearchCells.includes(this.TableCell[i].objID)) {
                        this.TableCell[i].searchInclude = true;
                        if (!includedSearchRows.includes(this.TableCell[i].objID))
                        includedSearchRows.push(this.TableCell[i].objID)
                    }
                    else
                        this.TableCell[i].searchInclude = false;
                }

                this.getUniqueIDsCustom(includedSearchRows);
                this.firstPage();

            },
            clearSearch: function () {
                if (this.searchTerm.length > 0) {
                    this.searchTerm = "";
                    this.searchTable();
                }
            }
        },

    };
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
@import "assets/Table.css";

</style>
