WITH recent_balances
AS
(SELECT balances.* FROM balances
 INNER JOIN trades
 ON balances.address=trades.address
 WHERE trades.block_height > 730000)

SELECT address,
 	SUM(CASE denom
			WHEN 'usdc' THEN amount*0.000001
			WHEN 'swth' THEN amount*0.00000005
			WHEN 'tmz' THEN amount*0.003
 		END) AS dollar_amount
FROM recent_balances
GROUP BY address
HAVING SUM(CASE denom
				WHEN 'usdc' THEN amount*0.000001
				WHEN 'swth' THEN amount*0.00000005
				WHEN 'tmz' THEN amount*0.003
 		END) >= 500;


