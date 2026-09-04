import os
import json
import boto3
import pytest
from moto import mock_aws

@pytest.fixture
def aws_credentials():
    os.environ["AWS_ACCESS_KEY_ID"] = "testing"
    os.environ["AWS_SECRET_ACCESS_KEY"] = "testing"
    os.environ["AWS_SECURITY_TOKEN"] = "testing"
    os.environ["AWS_SESSION_TOKEN"] = "testing"
    os.environ["AWS_DEFAULT_REGION"] = "us-east-1"

@mock_aws
def test_lambda_handler_increments_counter(aws_credentials):
    # 1. Bellek üzerinde sahte DynamoDB tablosu oluştur
    dynamodb = boto3.resource("dynamodb", region_name="us-east-1")
    table = dynamodb.create_table(
        TableName="resume-visitor-counter",
        KeySchema=[{"AttributeName": "id", "KeyType": "HASH"}],
        AttributeDefinitions=[{"AttributeName": "id", "AttributeType": "S"}],
        BillingMode="PAY_PER_REQUEST"
    )
    table.put_item(Item={"id": "sayac", "ziyaretci_sayisi": 0})

    # 2. Fonksiyonu çalıştır
    import lambda_function
    lambda_function.table = table  # Tablo referansını mock tabloya bağla
    response = lambda_function.lambda_handler({}, {})

    # 3. Sonuçları doğrula
    assert response["statusCode"] == 200
    data = json.loads(response["body"])
    assert data["ziyaretci_sayisi"] == 1