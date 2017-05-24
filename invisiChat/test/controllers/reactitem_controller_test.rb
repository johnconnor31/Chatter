require 'test_helper'

class ReactitemControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get reactitem_index_url
    assert_response :success
  end

end
