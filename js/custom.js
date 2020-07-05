var EMPTY_STRING = "";


function addTask() {
	var taskName = $('#taskName').val();
	if(taskName !== EMPTY_STRING) {
		$('#incompleteTasksTable tbody').prepend(getIncompleteTaskListRow(taskName));
		$('#addTaskModal button.close').click();
		console.log(taskName);
		$('#taskName').val(EMPTY_STRING);
	}
}

function completeTask(completeButton) {
	var completedTaskRow = $(completeButton).closest('tr');
	var completedTaskName = $(completedTaskRow).find('td:eq(1)').html();
	var completedTaskListRow = getCompleteTaskListRow(completedTaskName);
	$('#completeTasksTable tbody').prepend(completedTaskListRow);
	$(completedTaskRow).remove();
	//alert("Complete this task ?");
	console.log("Completed this task");
}

function incompleteTask(incompleteButton) {
	var incompletedTaskRow = $(incompleteButton).closest('tr');
	var incompletedTaskName = $(incompletedTaskRow).find('td:eq(1)').html();
	var incompletedTaskListRow = getIncompleteTaskListRow(incompletedTaskName);
	$('#incompleteTasksTable tbody').prepend(incompletedTaskListRow);
	$(incompletedTaskRow).remove();
	//alert("Is this task incomplete ?");
	console.log("Is this task incomplete ?");
}

function deleteTask(deleteButton) {
	$(deleteButton).closest('tr').remove();
	//alert("Delete this task ?");
	console.log("Task Deleted ?");
}


function getIncompleteTaskListRow(taskName) {
	var firstCol = getFirstColIncompleteTaskList();
	var secondCol = getSecondCol(taskName);
	var thirdCol = getThirdCol();
	
	var row = '<tr>' + firstCol + secondCol + thirdCol + '</tr>';
	return row;
}

function getCompleteTaskListRow(taskName) {
	var firstCol = getFirstColCompleteTaskList();
	var secondCol = getSecondCol(taskName);
	var thirdCol = getThirdCol();
	
	var row = '<tr>' + firstCol + secondCol + thirdCol + '</tr>';
	return row;
}

function getFirstColIncompleteTaskList() {
	return '<td width="20%" class="text-left"><i class="em em-white_check_mark" onclick="completeTask(this)"></i></td>';
}

function getFirstColCompleteTaskList() {
	return '<td width="20%" class="text-left"><i class="em em-x" onclick="incompleteTask(this)"></i></td>';
}

function getSecondCol(taskName) {
	return '<td width="60%" class="text-left">' + taskName + '</td>';
}

function getThirdCol() {
	return '<td width="20%" class="text-right"><i class="em em-no_entry" onclick="deleteTask(this)"></i></td>'
}

