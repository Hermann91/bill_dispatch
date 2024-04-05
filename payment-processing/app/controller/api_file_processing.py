from flask import request, jsonify, make_response

from app import app
from app.blueprints.payment_processing import main_csv_processing
from app.blueprints.file_permission import allowed_file


@app.route('/api/v1/procesing-csv-file', methods=['GET', 'POST'])
def upload_file():
    file = request.files['file']
    if file and allowed_file(file.filename):
        main_csv_processing(file)
    else:
        return make_response(
            jsonify(
                {"message": "Arquivo não é um CSV"}
            ),
            401,
        )
    return make_response(
            jsonify(
                {"message": "Arquivo processado"}
            ),
            200,
        )


