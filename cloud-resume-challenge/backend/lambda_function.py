import json
import boto3

dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
table = dynamodb.Table('resume-visitor-counter')

def lambda_handler(event, context):
    try:
        response = table.update_item(
            Key={'id': 'sayac'},
            UpdateExpression='ADD ziyaretci_sayisi :inc',
            ExpressionAttributeValues={':inc': 1},
            ReturnValues="UPDATED_NEW"
        )
        guncel_sayac = int(response['Attributes']['ziyaretci_sayisi'])
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': json.dumps({'ziyaretci_sayisi': guncel_sayac})
        }
    except Exception as e:
        print(f"Hata: {e}")
        return {
            'statusCode': 500,
            'body': json.dumps('Sunucu hatasi!')
        }